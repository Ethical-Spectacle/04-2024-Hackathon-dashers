import matplotlib.pyplot as plt
from mpl_toolkits.mplot3d import Axes3D
import numpy as np
from mpl_toolkits.mplot3d.art3d import Poly3DCollection  # Add this line

def draw_box(x_length, y_length, z_length):
    fig = plt.figure()
    ax = fig.add_subplot(111, projection='3d')

    # Corners of the box
    corners = np.array([[0, 0, 0],
                        [x_length, 0, 0],
                        [x_length, y_length, 0],
                        [0, y_length, 0],
                        [0, 0, z_length],
                        [x_length, 0, z_length],
                        [x_length, y_length, z_length],
                        [0, y_length, z_length]])

    # Generate the list of sides' polygons
    verts = [[corners[0], corners[1], corners[5], corners[4]],
             [corners[7], corners[6], corners[2], corners[3]],
             [corners[0], corners[3], corners[7], corners[4]],
             [corners[1], corners[2], corners[6], corners[5]],
             [corners[7], corners[4], corners[5], corners[6]],
             [corners[0], corners[3], corners[2], corners[1]]]

    # Plot sides
    ax.add_collection3d(Poly3DCollection(verts, 
                                         facecolors='cyan', linewidths=1, edgecolors='r', alpha=.25))

    ax.set_xlabel('X')
    ax.set_ylabel('Y')
    ax.set_zlabel('Z')

    # Setting the axes properties
    ax.set_xlim([0, max(x_length, y_length, z_length)])
    ax.set_ylim([0, max(x_length, y_length, z_length)])
    ax.set_zlim([0, max(x_length, y_length, z_length)])

    plt.show()

# Example dimensions in cm
x_length = 8
y_length = 4
z_length = 4

def create_box_obj(x_length, y_length, z_length, file_path):
    # Vertices of the box
    vertices = [
        [0, 0, 0],
        [x_length, 0, 0],
        [x_length, y_length, 0],
        [0, y_length, 0],
        [0, 0, z_length],
        [x_length, 0, z_length],
        [x_length, y_length, z_length],
        [0, y_length, z_length],
    ]

    # Faces of the box (using 1-based indexing for vertices)
    faces = [
        [1, 2, 3, 4],  # Bottom
        [5, 6, 7, 8],  # Top
        [1, 5, 8, 4],  # Front
        [2, 6, 7, 3],  # Back
        [1, 2, 6, 5],  # Right
        [4, 3, 7, 8],  # Left
    ]

    # Write to an OBJ file
    with open(file_path, 'w') as file:
        # Write vertices
        for v in vertices:
            file.write(f"v {' '.join(map(str, v))}\n")

        # Write faces
        for f in faces:
            file.write(f"f {' '.join(map(str, f))}\n")

# Example: Creating an OBJ file for a box with given dimensions
x_length, y_length, z_length = 10, 15, 5  # Example dimensions in cm
file_path = 'box.obj'
create_box_obj(x_length, y_length, z_length, file_path)
