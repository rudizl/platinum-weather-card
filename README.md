# Platinum Weather Card

A highly configurable weather card for Home Assistant with a graphical editor. Based on the original by [@makin-things](https://www.github.com/makin-things), extended by [@tommyjlong](https://github.com/tommyjlong), maintained here by [@rudizl](https://github.com/rudizl).

[![hacs_badge](https://img.shields.io/badge/HACS-Custom-orange.svg?style=for-the-badge)](https://github.com/custom-components/hacs)
[![GitHub Release][releases-shield]][releases]
[![License][license-shield]](LICENSE.md)
![Maintenance](https://img.shields.io/badge/MAINTAINED-YES-green?style=for-the-badge)

## Screenshots

<table>
<tr>
<td align="center" width="50%">

**Card overview**

![Card overview](docs/images/card-overview.png)

</td>
<td align="center" width="50%">

**Slot configuration in editor**

![Editor slots](docs/images/editor-slots.png)

</td>
</tr>
<tr>
<td align="center">

**Include Today in Forecast — ON**

![Include today on](docs/images/editor-include-today-on.png)

</td>
<td align="center">

**Include Today in Forecast — OFF**

![Include today off](docs/images/editor-include-today-off.png)

</td>
</tr>
<tr>
<td align="center">

**Forecast temperature decimals — ON**

![Forecast decimals on](docs/images/editor-forecast-decimals-on.png)

</td>
<td align="center">

**Forecast temperature decimals — OFF**

![Forecast decimals off](docs/images/editor-forecast-decimals-off.png)

</td>
</tr>
<tr>
<td align="center" colspan="2">

**Custom slot with label** — `custom1_label: 'Place'` displays a text prefix before the entity value

![Custom slot label](docs/images/editor-custom-slot-label.png)

</td>
</tr>
</table>

<details>
<summary><strong>Changelog — Stable releases</strong></summary>

**v1.3.0**
- Fix all card editor dropdowns not showing saved values — all slot selects (Left/Right 1–8), overview layout, forecast type, daily forecast layout, time format, pressure decimals and forecast days now correctly reflect the current configuration when opening the editor
- Fix rainy/pouring icon associations — pouring now shows a more intense icon than rainy
- Add `moon` slot — displays moon phase from a HA Moon integration sensor (`entity_moon`), with dynamic phase-specific icon (`mdi:moon-*`) and translated phase names for all 11 supported locales (bg, ru, ua, de, fr, it, nl, pl, da, es, he); default slot r4 changed from `fire_danger` to `moon`
- Add `option_forecast_decimals` — show 1 decimal place in forecast temperatures
- Add `option_show_forecast_pop` — allow hiding precipitation probability in the forecast section
- Add `currentWindSpeedUnit` — reads wind speed unit directly from weather entity attributes
- Add `localeTextObservedMax`/`localeTextObservedMin` translations for all supported languages
- Add Spanish (`es`) locale
- HA profile integration — time and date format now read from HA Settings → Profile when set to `system`
- Single-file build — eliminates browser caching issues after HACS updates
- Added Actions documentation with examples for `tap_action`, `hold_action` and `double_tap_action`

**v1.2.4**
- Definitive fix for broken editor dropdowns — replaced all `ha-select`/`ha-list-item` with native `<select>` elements styled to match the HA editor

**v1.2.3**
- Fix editor dropdowns still not working — `mwc-list-item` removed in HA 2024.x, replaced with `ha-list-item` (136 occurrences)

**v1.2.2**
- Fix all dropdowns in the card editor not working in newer HA versions (`@selected` → `@value-changed`)

**v1.2.1**
- Add `double_tap_action` support
- Add `Gust` localization for all supported languages (bg: Пориви)
- Accept `hourly` and `twice_daily` as valid `forecast_type` values (previously only `daily` was accepted)
- Fix broken layout in slots section
- Fix malformed HTML in beaufort wind display
- Fix unsafe array access in `slotPossibleTomorrow`
- Fix null guard in forecast property lookup

</details>

<details>
<summary><strong>Changelog — Beta releases</strong></summary>

**v1.3.1-beta.12**
- Fix false-positive errors for sensor entities with multi-digit numbers in their names (e.g. `sensor.ivarna103_*`) — the card no longer checks if an auto-incremented entity name exists, eliminating spurious `'entity_pop'+'1'=...not found` warnings
- Add optional label field to custom slots (custom1–4) — set `custom1_label: 'My label'` to display a small secondary text before the entity value; configurable via the editor

**v1.3.1-beta.11**
- Add `option_show_current_day` — new toggle **"Include Today in Forecast"** in the editor (Daily Forecast section); when enabled, the forecast strip starts from today instead of tomorrow

**v1.3.1-beta.9**
- Show `---` instead of `NaN%` / `unknownmm` when a sensor entity returns `unknown` or `unavailable` — affects humidity, rainfall, pressure, visibility, wind speed/gust, and precipitation slots

**v1.3.1-beta.4**
- Add `getEntitySuggestion` — card appears in the HA 2026.6+ card picker under "Community" when a `weather.*` entity is selected, pre-filling `weather_entity` in the config

**v1.3.1-beta.3**
- Fix `fireDanger` variable scoping in vertical forecast layout
- Add `check: false` to TypeScript plugin to resolve build-time redeclaration error

**v1.3.1-beta.2**
- Remove `resize-observer-polyfill` dependency (~30KB bundle saving; all HA-supported browsers have had native `ResizeObserver` since 2020)
- Add missing `entity_moon` to TypeScript `WeatherCardConfig` interface
- Remove `ha-textfield` from editor CSS (officially removed in HA 2026.5)
- Remove stale TODO comments and old attribution comments

**v1.3.1-beta.1**
- Fix editor switch color — replace removed HA 2026.5 MDC tokens (`--mdc-theme-secondary`, `--switch-checked-color`) with new WebAwesome tokens (`--ha-switch-checked-background-color`, `--ha-switch-checked-thumb-background-color`)
- Migrate all editor text inputs from deprecated `ha-textfield` to `ha-input` (HA 2026.5+ compatible)
- Update editor loading guard to detect both `ha-input` and `ha-textfield`
- Remove dead `mwc-select` CSS rule (unused since v1.2.4)

</details>

Issues and PRs are welcome! For general discussion, the Home Assistant Community thread is [here](https://community.home-assistant.io/t/platinum-weather-card-support/449166).

---

# Installation

Install via HACS as a custom repository:

1. Go to HACS → Frontend → three dots (⋮) → **Custom repositories**
2. Add `https://github.com/rudizl/platinum-weather-card` as **Dashboard**
3. Search for "Platinum Weather Card" and install the one from `rudizl`

After installing, add as many instances of the card to your dashboard as needed.

---

# Getting Started

You must have a weather integration configured before adding the card — it only visualises data from existing entities. When you first create a card it will appear empty until you configure it via the GUI editor.

![Unconfigured card](./images/unconfigured-card.png)

---

# Concepts

The card is divided into sections that can each be enabled, disabled, and reordered independently. Each section has its own configuration page for entity selection and display options.

![Platinum Weather card](./images/all-sections-highlighted.png)

There is no reason all your weather data needs to be on a single card — you can create multiple instances with different configurations.

---

# Sections

- Overview
- Extended
- Slots
- Daily Forecasts

Use the switch on the main config dialog to hide a section entirely, and the up/down buttons to reorder them. The **Global Options** section contains settings that affect multiple sections.

## Overview Section

Four layout options are available:

| Layout | Preview |
|--------|---------|
| **Complete** | ![](./images/overview-section-complete.png) |
| **Observations** | ![](./images/overview-section-observations.png) |
| **Forecast** | ![](./images/overview-section-forecast.png) |
| **Title Only** | ![](./images/overview-section-title-only.png) |

| Option | Type | Description |
| ------ | ---- | ----------- |
| Card Title Text Line 1 | String | Optional title line 1 |
| Card Title Text Line 2 | String | Optional title line 2 |
| Entity Update Time | Entity | Entity providing the timestamp (RFC 3339 format) |
| &nbsp;&nbsp;Use Attribute | Boolean | Use an attribute of the above entity for the timestamp |
| &nbsp;&nbsp;Attribute | String | The attribute containing the timestamp |
| Update Time Prefix | String | Text to prepend to the timestamp |
| Entity Current Temperature | Entity | Current temperature |
| Entity Apparent Temperature | Entity | Apparent / feels-like temperature |
| Entity Forecast Icon | Entity | Entity whose state drives the condition icon |
| Entity Forecast Summary | Entity | Entity whose state is shown as the condition text |

## Extended Section

Shows today's detailed forecast text.


| Option | Type | Description |
| ------ | ---- | ----------- |
| Entity Extended Forecast | Entity | Entity providing the detailed forecast |
| &nbsp;&nbsp;Use Attribute | Boolean | Use an attribute of the entity instead of its state |
| &nbsp;&nbsp;Attribute | String | The attribute containing the forecast text |
| Entity Today's UV Forecast | String | Optional entity appended to the extended forecast |
| Entity Today's Fire Danger | String | Optional entity appended to the extended forecast |

## Slots Section

Up to 8 rows of data in 2 columns. The required entities update dynamically based on which slots are selected.


| Slot Value | Description | Example |
| ---------- | ----------- | ------- |
| `humidity` | Current humidity | 36% |
| `rainfall` | Today's recorded rainfall | 5mm |
| `pressure` | Current air pressure | 1018hPa |
| `wind` | Wind direction, speed and gust | SSE 9km/h (Gust 13km/h) |
| `wind_kt` | Wind in knots | SSE 5Kt (Gust 6Kt) |
| `visibility` | Current visibility | 70km |
| `observed_max` | Today's observed maximum | Observed Max 19°C |
| `observed_min` | Today's observed minimum | Observed Min 4°C |
| `forecast_max` | Today's forecast maximum | Forecast Max 19°C |
| `forecast_min` | Today's forecast minimum | Forecast Min 1°C |
| `temp_next` | Next min or max | Overnight Min 4°C |
| `temp_following` | Following min or max | Tomorrow's Max 20°C |
| `temp_maximums` | Observed and forecast max | Obs Max 15°C (Fore 19°C) |
| `temp_minimums` | Observed and forecast min | Obs Min 13°C (Fore 1°C) |
| `sun_next` | Next sunrise or sunset | 7:10pm |
| `sun_following` | Following sunrise or sunset | Mon 6:35am |
| `moon` | Moon phase with dynamic icon and translated name | Растяща луна |
| `pop` | Chance of rain | 10% |
| `popforecast` | Rainfall forecast | 10% - 3 to 6mm |
| `possible_today` | Forecast rain today | Forecast 15-25mm |
| `possible_tomorrow` | Forecast rain tomorrow | Fore Tom 5-10mm |
| `uv_summary` | UV forecast | UV High |
| `fire_danger` | Fire danger | Moderate |
| `custom1`–`custom4` | Custom entity with icon and unit | |
| `empty` | Blank slot (preserves space) | |
| `remove` | Remove slot entirely | |

## Daily Forecast Section


Two layout options: **Horizontal** (default, up to 5 days) and **Vertical** (up to 7 days).

| Option | Type | Description |
| ------ | ---- | ----------- |
| Weather Entity with Forecasts | String | Main weather entity for forecast data |
| Forecast Type | String | `daily`, `hourly`, or `twice_daily` |
| Entity Forecast Icon 1 | String | Entity for forecast condition icon |
| Entity Forecast Summary 1 | String | Entity for forecast summary text |
| Entity Forecast Min 1 | String | Forecast minimum temperature |
| Entity Forecast Max 1 | String | Forecast maximum temperature |
| Entity Forecast Chance of Rain 1 | String | Precipitation probability |
| Entity Forecast Possible Rain 1 | String | Estimated rainfall amount |
| Entity Extended Forecast 1 | String | Detailed forecast text (vertical only) |
| Entity Fire Danger 1 | String | Fire danger forecast (vertical only) |

## Global Options


| Option | Type | Description |
| ------ | ---- | ----------- |
| Show Static Icons | Boolean | Disable animated icons |
| Time Format | String | `system` (follows HA Settings → Profile), `12hour`, or `24hour` |
| Locale | String | Locale for timestamp and moon phase formatting. Supported: `bg`, `ru`, `ua`, `de`, `fr`, `it`, `nl`, `pl`, `da`, `es`, `he` (leave empty to use browser locale) |
| Include Today in Forecast | Boolean | Start the daily forecast strip from today instead of tomorrow |

---

# YAML Reference

Almost all settings can be configured in the GUI editor. The YAML reference below is for advanced use or bulk configuration. Access it via **Show Code Editor** in the card editor.

## Global Settings

| Variable | Type | Default | Description |
| -------- | ---- | ------- | ----------- |
| `type` | String | — | Must be `custom:platinum-weather-card` |
| `section_order` | List | overview, extended, slots, daily_forecast | Section display order |
| `show_section_overview` | Boolean | `true` | Show/hide overview section |
| `show_section_extended` | Boolean | `true` | Show/hide extended section |
| `show_section_slots` | Boolean | `true` | Show/hide slots section |
| `show_section_daily_forecast` | Boolean | `true` | Show/hide daily forecast section |
| `tap_action` | Action | none | Action on tap |
| `hold_action` | Action | none | Action on hold |
| `double_tap_action` | Action | none | Action on double-tap |
| `option_static_icons` | Boolean | `false` | Use non-animated icons |

## Actions

The card supports all standard [HA actions](https://www.home-assistant.io/dashboards/actions/). Some examples:

```yaml
# Tap — show more-info for a specific entity
tap_action:
  action: more-info
entity: weather.my_weather

# Hold — navigate to another dashboard view
hold_action:
  action: navigate
  navigation_path: /lovelace/misc

# Double-tap — toggle a light
double_tap_action:
  action: call-service
  service: light.toggle
  target:
    entity_id: light.living_room
```
| `option_time_format` | String | `system` | `system` (follows HA Settings → Profile), `12hour` or `24hour` |
| `option_locale` | String | none | Locale for timestamp and moon phase: `bg`, `ru`, `ua`, `de`, `fr`, `it`, `nl`, `pl`, `da`, `es`, `he` |
| `text_update_time_prefix` | String | none | Prefix for the update time display |

## Overview Settings

| Variable | Type | Default | Description |
| -------- | ---- | ------- | ----------- |
| `overview_layout` | String | `complete` | `complete`, `observations`, `forecast` or `title only` |
| `option_show_overview_decimals` | Boolean | `false` | Show 1 decimal on current/apparent temperature |
| `option_show_overview_separator` | Boolean | `false` | Show separator below overview section |
| `text_card_title` | String | none | Title line 1 |
| `text_card_title_2` | String | none | Title line 2 |
| `entity_update_time` | String | none | Entity providing the update timestamp |
| `update_time_use_attr` | Boolean | `false` | Use attribute for the timestamp |
| `update_time_name_attr` | String | none | Attribute name for the timestamp |
| `entity_temperature` | String | none | Current temperature entity |
| `entity_apparent_temp` | String | none | Apparent temperature entity |
| `entity_forecast_icon` | String | none | Forecast icon entity |
| `entity_summary` | String | none | Forecast summary entity |

## Extended Section

| Variable | Type | Default | Description |
| -------- | ---- | ------- | ----------- |
| `entity_extended` | String | none | Extended forecast entity |
| `extended_use_attr` | Boolean | `false` | Use attribute of the entity |
| `extended_name_attr` | String | none | Attribute name |
| `entity_todays_uv_forecast` | String | none | UV forecast entity |
| `entity_todays_fire_danger` | String | none | Fire danger entity |

## Slots Section

| Variable | Type | Default | Description |
| -------- | ---- | ------- | ----------- |
| `slot_l1`–`slot_l8` | Slot | see below | Left column slots 1–8 |
| `slot_r1`–`slot_r8` | Slot | see below | Right column slots 1–8 |
| `entity_pop` | String | none | Required for `pop`, `popforecast` |
| `entity_pos` | String | none | Required for `popforecast`, `possible_today` |
| `entity_possible_tomorrow` | String | none | Required for `possible_tomorrow` |
| `entity_rainfall` | String | none | Required for `rainfall` |
| `entity_humidity` | String | none | Required for `humidity` |
| `entity_pressure` | String | none | Required for `pressure` |
| `pressure_units` | String | none | Optional pressure unit label |
| `entity_observed_max` | String | none | Required for `observed_max`, `temp_maximums` |
| `entity_observed_min` | String | none | Required for `observed_min`, `temp_minimums` |
| `entity_forecast_max` | String | none | Required for `forecast_max`, `temp_maximums` |
| `entity_forecast_min` | String | none | Required for `forecast_min`, `temp_minimums` |
| `entity_temp_next` | String | none | Required for `temp_next` |
| `entity_temp_next_label` | String | none | Required for `temp_next` |
| `entity_temp_following` | String | none | Required for `temp_following` |
| `entity_temp_following_label` | String | none | Required for `temp_following` |
| `entity_uv_alert_summary` | String | none | Required for `uv_summary` |
| `entity_fire_danger` | String | none | Required for `fire_danger` |
| `entity_wind_bearing` | String | none | Required for `wind`, `wind_kt` |
| `entity_wind_speed` | String | none | Required for `wind`; wind speed unit is read automatically from the weather entity attributes |
| `entity_wind_gust` | String | none | Required for `wind` |
| `entity_wind_speed_kt` | String | none | Required for `wind_kt` |
| `entity_wind_gust_kt` | String | none | Required for `wind_kt` |
| `entity_visibility` | String | none | Required for `visibility` |
| `entity_sun` | String | none | Required for `sun_next`, `sun_following` |
| `entity_moon` | String | none | Required for `moon` (HA Moon integration sensor) |
| `custom1_value`–`custom4_value` | String | none | Entity for custom slot |
| `custom1_icon`–`custom4_icon` | Icon | none | MDI icon for custom slot |
| `custom1_units`–`custom4_units` | String | none | Unit label for custom slot |
| `custom1_label`–`custom4_label` | String | none | Optional text label shown before the value |
| `option_today_temperature_decimals` | Boolean | `false` | 1 decimal on temperature slots |
| `option_today_rainfall_decimals` | Boolean | `false` | 1 decimal on rainfall slots |
| `option_forecast_decimals` | Boolean | `false` | 1 decimal on forecast temperatures |
| `option_show_forecast_pop` | Boolean | `true` | Show precipitation probability in forecast |
| `option_pressure_decimals` | Number | `0` | Decimal places for pressure: `0`–`3` |
| `option_color_fire_danger` | Boolean | `true` | Colour fire danger by severity |

Default slot values: l1=`forecast_max`, l2=`forecast_min`, l3=`wind`, l4=`pressure`, l5=`sun_next`, l6–l8=`remove`, r1=`popforecast`, r2=`humidity`, r3=`uv_summary`, r4=`moon`, r5=`sun_following`, r6–r8=`remove`.

## Daily Forecast Section

| Variable | Type | Default | Description |
| -------- | ---- | ------- | ----------- |
| `weather_entity` | String | — | Main weather entity for forecasts |
| `forecast_type` | String | `daily` | `daily`, `hourly`, or `twice_daily` |
| `daily_forecast_layout` | String | `horizontal` | `horizontal` or `vertical` |
| `daily_forecast_days` | Number | `5` | Days to show: 1–5 (horizontal), 1–7 (vertical) |
| `option_tooltips` | Boolean | `false` | Tooltips on horizontal forecast |
| `option_show_current_day` | Boolean | `false` | Include today in forecast strip (starts from today instead of tomorrow) |
| `daily_extended_forecast_days` | Number | `7` | Extended forecast days (vertical only, 0–7) |
| `option_daily_color_fire_danger` | Boolean | `true` | Colour fire danger (vertical only) |
| `old_daily_format` | Boolean | `false` | Stack max/min vertically instead of side by side |
| `tempformat` | String | — | `highlow` = show max before min |

[license-shield]: https://img.shields.io/github/license/makin-things/platinum-weather-card.svg?style=for-the-badge
[releases-shield]: https://img.shields.io/github/release/rudizl/platinum-weather-card.svg?style=for-the-badge
[releases]: https://github.com/rudizl/platinum-weather-card/releases
