import { noChange } from 'lit';
import { AttributePart, directive, Directive, DirectiveParameters } from 'lit/directive';

import { ActionHandlerDetail, ActionHandlerOptions } from 'custom-card-helpers/dist/types';
import { fireEvent } from 'custom-card-helpers';

const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.maxTouchPoints > 0;

interface ActionHandler extends HTMLElement {
  holdTime: number;
  bind(element: Element, options): void;
}
interface ActionHandlerElement extends HTMLElement {
  actionHandler?: boolean;
}

declare global {
  interface HASSDomEvents {
    action: ActionHandlerDetail;
  }
}

class ActionHandler extends HTMLElement implements ActionHandler {
  public holdTime = 500;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public ripple: any;

  protected timer?: number;

  protected held = false;

  private dblClickTimeout?: number;

  private startX = 0;

  private startY = 0;

  constructor() {
    super();
    this.ripple = document.createElement('mwc-ripple');
  }

  public connectedCallback(): void {
    Object.assign(this.style, {
      position: 'absolute',
      width: isTouch ? '100px' : '50px',
      height: isTouch ? '100px' : '50px',
      transform: 'translate(-50%, -50%)',
      pointerEvents: 'none',
      zIndex: '999',
    });

    this.appendChild(this.ripple);
    this.ripple.primary = true;

    // Only touchcancel should reset the timer — scroll/mouseout/wheel were
    // incorrectly cancelling taps on mobile (page scroll fires before touchend)
    document.addEventListener('touchcancel', () => {
      clearTimeout(this.timer);
      this.stopAnimation();
      this.timer = undefined;
    }, { passive: true });

    // On desktop only: cancel hold if mouse leaves the element
    if (!isTouch) {
      document.addEventListener('mouseout', () => {
        clearTimeout(this.timer);
        this.stopAnimation();
        this.timer = undefined;
      }, { passive: true });
    }

    // touchmove: only cancel if movement exceeds threshold (avoids cancelling taps on micro-movements)
    document.addEventListener('touchmove', (ev: TouchEvent) => {
      if (this.timer !== undefined && ev.touches.length > 0) {
        const dx = ev.touches[0].pageX - this.startX;
        const dy = ev.touches[0].pageY - this.startY;
        if (Math.sqrt(dx * dx + dy * dy) > 10) {
          clearTimeout(this.timer);
          this.stopAnimation();
          this.timer = undefined;
        }
      }
    }, { passive: true });

    // mouseup: only cancel on non-touch devices (on touch, touchend handles it)
    document.addEventListener('mouseup', () => {
      if (!isTouch) {
        clearTimeout(this.timer);
        this.stopAnimation();
        this.timer = undefined;
      }
    }, { passive: true });
  }

  public bind(element: ActionHandlerElement, options): void {
    if (element.actionHandler) {
      return;
    }
    element.actionHandler = true;

    element.addEventListener('contextmenu', (ev: Event) => {
      const e = ev || window.event;
      if (e.preventDefault) {
        e.preventDefault();
      }
      if (e.stopPropagation) {
        e.stopPropagation();
      }
      e.cancelBubble = true;
      e.returnValue = false;
      return false;
    });

    const start = (ev: Event): void => {
      this.held = false;
      let x;
      let y;
      if ((ev as TouchEvent).touches) {
        x = (ev as TouchEvent).touches[0].pageX;
        y = (ev as TouchEvent).touches[0].pageY;
      } else {
        x = (ev as MouseEvent).pageX;
        y = (ev as MouseEvent).pageY;
      }

      this.startX = x;
      this.startY = y;
      this.timer = window.setTimeout(() => {
        this.startAnimation(x, y);
        this.held = true;
      }, this.holdTime);
    };

    const end = (ev: Event): void => {
      ev.preventDefault();
      if (ev.type === 'touchcancel') {
        clearTimeout(this.timer);
        this.stopAnimation();
        this.timer = undefined;
        this.held = false;
        return;
      }
      const wasHeld = this.held;
      clearTimeout(this.timer);
      this.stopAnimation();
      this.timer = undefined;
      this.held = false;
      if (wasHeld) {
        fireEvent(element, 'action', { action: 'hold' });
      } else if (options.hasDoubleClick) {
        if ((ev.type === 'click' && (ev as MouseEvent).detail < 2) || !this.dblClickTimeout) {
          this.dblClickTimeout = window.setTimeout(() => {
            this.dblClickTimeout = undefined;
            fireEvent(element, 'action', { action: 'tap' });
          }, 250);
        } else {
          clearTimeout(this.dblClickTimeout);
          this.dblClickTimeout = undefined;
          fireEvent(element, 'action', { action: 'double_tap' });
        }
      } else {
        fireEvent(element, 'action', { action: 'tap' });
      }
    };

    const handleEnter = (ev: KeyboardEvent): void => {
      if (ev.keyCode !== 13) {
        return;
      }
      end(ev);
    };

    element.addEventListener('touchstart', start, { passive: true });
    element.addEventListener('touchend', end);
    element.addEventListener('touchcancel', end);

    element.addEventListener('mousedown', start, { passive: true });
    element.addEventListener('click', end);

    element.addEventListener('keyup', handleEnter);
  }

  private startAnimation(x: number, y: number): void {
    Object.assign(this.style, {
      left: `${x}px`,
      top: `${y}px`,
      display: null,
    });
    this.ripple.disabled = false;
    this.ripple.active = true;
    this.ripple.unbounded = true;
  }

  private stopAnimation(): void {
    this.ripple.active = false;
    this.ripple.disabled = true;
    this.style.display = 'none';
  }
}

// TODO You need to replace all instances of "action-handler-weather" with "action-handler-<your card name>"
customElements.define('action-handler-weather', ActionHandler);

const getActionHandler = (): ActionHandler => {
  const body = document.body;
  if (body.querySelector('action-handler-weather')) {
    return body.querySelector('action-handler-weather') as ActionHandler;
  }

  const actionhandler = document.createElement('action-handler-weather');
  body.appendChild(actionhandler);

  return actionhandler as ActionHandler;
};

export const actionHandlerBind = (element: ActionHandlerElement, options?: ActionHandlerOptions): void => {
  const actionhandler: ActionHandler = getActionHandler();
  if (!actionhandler) {
    return;
  }
  actionhandler.bind(element, options);
};

export const actionHandler = directive(
  class extends Directive {
    update(part: AttributePart, [options]: DirectiveParameters<this>) {
      actionHandlerBind(part.element as ActionHandlerElement, options);
      return noChange;
    }

    // eslint-disable-next-line @typescript-eslint/no-empty-function, @typescript-eslint/no-unused-vars
    render(_options?: ActionHandlerOptions) { }
  },
);
