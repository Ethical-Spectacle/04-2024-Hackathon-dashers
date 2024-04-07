import json
import random
from boxes import BoxGenerator

class DatasetCreator:
    """
    A class to create a dataset for the box packing problem, including truck dimensions and box parameters.
    """
    def __init__(self, min_boxes=10, max_boxes=100, min_value=50, max_value=500,
                 max_truck_dim=(1000, 1000, 1000), min_truck_dim=(50, 50, 50)):
        """
        Initializes the DatasetCreator with parameters for box and truck dimension ranges.

        Parameters:
        - min_boxes, max_boxes (int): The minimum and maximum number of boxes.
        - min_value, max_value (int): The minimum and maximum value associated with each box.
        - max_truck_dim, min_truck_dim (tuple): The maximum and minimum dimensions for the trucks.
        """
        self.min_boxes = min_boxes
        self.max_boxes = max_boxes
        self.min_value = min_value
        self.max_value = max_value
        self.max_truck_len, self.max_truck_wid, self.max_truck_ht = max_truck_dim
        self.min_truck_len, self.min_truck_wid, self.min_truck_ht = min_truck_dim
        self.box_generator = BoxGenerator()

    def generate_dataset(self):
        """
        Generates a dataset of packing scenarios, each with a set of boxes and a truck.

        Returns:
        - A dictionary representing the dataset, where each key is a scenario with truck dimensions,
          box parameters, and total value.
        """
        truck_dim = [[random.randint(self.min_truck_len, self.max_truck_len),
                      random.randint(self.min_truck_wid, self.max_truck_wid),
                      random.randint(self.min_truck_ht, self.max_truck_ht)] for _ in range(5)]
        num_boxes = [[random.randint(self.min_boxes, self.max_boxes) for _ in range(5)] for _ in range(5)]
        dataset = {}
        i = 0
        origin = [0,0,0]
        for truck_dimensions, box_counts in zip(truck_dim, num_boxes):
            for number_of_boxes in box_counts:
                # Generate boxes within the truck's volume, defined by starting at the origin [0, 0, 0] and truck_dimensions [length, width, height]
                packages = self.box_generator.generate_boxes([origin + truck_dimensions], number_of_boxes)
                boxes = []
                total_value = 0
                for each in packages:
                    l, w, h = each[3:]
                    vol = l * w * h
                    value = random.randint(self.min_value, self.max_value)
                    total_value += value
                    boxes.append([l, w, h, vol, value])
                dataset[str(i)] = {'truck dimension': truck_dimensions, 'number': number_of_boxes, 'boxes': boxes, 'solution': packages,
                                   'total value': total_value}
                i += 1
        return dataset

    def save_to_file(self, dataset, filename='input.json'):
        with open(filename, 'w') as outfile:
            json.dump(dataset, outfile)


if __name__ == "__main__":
    creator = DatasetCreator()
    dataset = creator.generate_dataset()
    creator.save_to_file(dataset)
    print("New dataset has been generated")
