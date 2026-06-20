from PIL import Image, ImageDraw
import math

# Image dimensions
width, height = 1920, 1080

# Create a solid black background
bg = Image.new("RGB", (width, height), (0, 0, 0))

# Create a transparent image for the grid
grid_layer = Image.new("RGBA", (width, height), (0, 0, 0, 0))
draw = ImageDraw.Draw(grid_layer)

# Grid parameters
grid_size = 40
line_color = (255, 255, 255, int(255 * 0.05)) # 5% white

# Draw vertical lines
for x in range(0, width, grid_size):
    draw.line([(x, 0), (x, height)], fill=line_color, width=1)

# Draw horizontal lines
for y in range(0, height, grid_size):
    draw.line([(0, y), (width, y)], fill=line_color, width=1)

# Create a radial gradient mask
mask = Image.new("L", (width, height), 0)
mask_draw = ImageDraw.Draw(mask)

center_x, center_y = width / 2, height / 2
# 80% of the viewport width/height can be tricky. CSS says transparent 80%.
# Let's say max radius is 80% of the distance to the farthest corner? 
# In CSS `circle at center`, the radius is typically up to the closest edge, or farthest corner. 
# Usually, radial-gradient(circle at center, black, transparent 80%) means at 80% of the radius to the farthest corner it becomes transparent.
max_radius = math.hypot(center_x, center_y) * 0.8

for y in range(height):
    for x in range(width):
        dist = math.hypot(x - center_x, y - center_y)
        if dist < max_radius:
            # Linear fade from center
            opacity = 1.0 - (dist / max_radius)
            # Apply an ease or just linear. CSS default is linear color stop interpolation.
            mask.putpixel((x, y), int(opacity * 255))
        else:
            mask.putpixel((x, y), 0)

# Apply mask to grid_layer
grid_layer.putalpha(mask)

# Composite grid over background
final_image = Image.alpha_composite(bg.convert("RGBA"), grid_layer)

# Save as JPEG (must convert to RGB first)
final_rgb = final_image.convert("RGB")
output_path = r"C:\Users\rtx4060ti\.gemini\antigravity\brain\57328f59-cf37-4361-897e-c7ef65e9a01e\grid_background.jpg"
final_rgb.save(output_path, "JPEG", quality=95)
print(f"Image saved to {output_path}")
