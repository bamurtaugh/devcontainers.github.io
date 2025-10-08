# Gradient Theme Option

This site now supports a gradient theme option that can be enabled in the `_config.yml` file.

## Configuration

To enable the gradient theme, add or modify the following settings in `_config.yml`:

```yaml
use_gradient: true
gradient_start_color: 2753E3  # Starting color of the gradient (hex without #)
gradient_end_color: 00B4D8    # Ending color of the gradient (hex without #)
```

## How It Works

When `use_gradient` is set to `true`, the following changes take effect:

1. **Header Background**: The `.bg-primary` class (used in the site header) will use a linear gradient from `gradient_start_color` to `gradient_end_color` at a 135-degree angle
2. **Link Colors**: Navigation links and general links will use the `gradient_start_color` instead of the solid `theme_color`
3. **Meta Theme Color**: The browser theme color meta tag will use the `gradient_start_color`

## Disabling the Gradient

To revert to the solid color theme, simply set:

```yaml
use_gradient: false
```

Or remove the `use_gradient` configuration entirely. The site will fall back to using the standard `theme_color` value.

## Customization

You can customize the gradient by adjusting:
- **gradient_start_color**: The color the gradient starts with (typically the primary brand color)
- **gradient_end_color**: The color the gradient transitions to

Colors should be specified as 6-character hex values without the `#` prefix (e.g., `2753E3` instead of `#2753E3`).

## Example Configurations

### Blue to Cyan Gradient (Default)
```yaml
use_gradient: true
gradient_start_color: 2753E3
gradient_end_color: 00B4D8
```

### Purple to Pink Gradient
```yaml
use_gradient: true
gradient_start_color: 6B46C1
gradient_end_color: EC4899
```

### Green to Blue Gradient
```yaml
use_gradient: true
gradient_start_color: 10B981
gradient_end_color: 3B82F6
```
