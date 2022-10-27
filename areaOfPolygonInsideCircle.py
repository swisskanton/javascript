def area_of_polygon_inside_circle(circle_radius, number_of_sides):
    import math
    return round(number_of_sides * circle_radius ** 2 * math.sin(2 * math.pi / number_of_sides) / 2, 3)

print(area_of_polygon_inside_circle(3, 3), '> 11.691')
print(area_of_polygon_inside_circle(5.8, 7), '> 92.053')
print(area_of_polygon_inside_circle(4, 5), '> 38.042')