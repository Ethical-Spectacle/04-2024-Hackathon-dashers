import random

class BoxGenerator:
    """
    A class to generate boxes with specified dimensions and constraints.
    """
    def __init__(self, min_dim=11, split_dim_min=5):
        self.min_dim = min_dim
        self.split_dim_min = split_dim_min

    def generate_boxes(self, container, num):
        """
        Generates a list of boxes within a container based on the specified conditions.

        Parameters:
        - container (list): A list of cuboids where each cuboid is represented by six integers.
        - num (int): The number of boxes to generate.

        Returns:
        - A list of generated boxes with their dimensions.
        """
        retry = 500 * num
        while num > 1:
            cuboid = random.choice(container)
            while cuboid[3] <= self.min_dim or cuboid[4] <= self.min_dim or cuboid[5] <= self.min_dim:
                retry -= 1
                if retry == 0:
                    print("Cannot partition into packages. Please try again")
                    return
                cuboid = random.choice(container)
            container.remove(cuboid)
            prob = random.uniform(0, 1)
            x1, y1, z1, x2, y2, z2 = cuboid
            
            # Splitting the cuboid based on the random probability generated
            if prob < 0.35:
                t = random.randint(self.split_dim_min, int(x2 / 2))
                package1 = [x1 + t, y1, z1, x2 - t, y2, z2]
                package2 = [x1, y1, z1, t, y2, z2]
            elif prob < 0.65:
                t = random.randint(self.split_dim_min, int(y2 / 2))
                package1 = [x1, y1 + t, z1, x2, y2 - t, z2]
                package2 = [x1, y1, z1, x2, t, z2]
            else:
                t = random.randint(self.split_dim_min, int(z2 / 2))
                package1 = [x1, y1, z1 + t, x2, y2, z2 - t]
                package2 = [x1, y1, z1, x2, y2, t]
            container.append(package1)
            container.append(package2)
            num -= 1
        return container
