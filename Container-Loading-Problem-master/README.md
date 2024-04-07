# A hybrid multi-objective genetic algorithm for the container loading problem

This repository showcases a unique approach to solving the container loading problem, a challenge commonly faced in industries related to shipping and storage. Here, we aim to pack a container as efficiently as possible, focusing on fitting the most boxes, maximizing the space used, and ensuring the packed items' total value is as high as possible.

We use a diploid chromosome structure to better organize and decide on the arrangement and orientation of boxes. This method is enhanced by a tweaked version of an existing packing algorithm, known as DBLF, which helps us place boxes in the most effective way.

By combining advanced genetic algorithms with a refined packing technique, we tackle the complex issue of packing boxes into a single container, striving for optimal space usage and value maximization. 

*For a detailed description of the methods and background have a look at the project [report](https://github.com/Nivedha-Ramesh/Container-Loading-Problem/blob/master/Report.pdf).*

**Getting Started**

To get started with this project, clone this repository to your local machine.


Ensure you have Python installed on your system. This project is tested with Python 3.7+. You can check your Python version by running:
```bash
python --version
```

Install the required Python packages:
```bash
pip install -r requirements.txt
```

**Creating a New Dataset**
```bash
cd path/to/your/project
```

```bash
python create_dataset.py
```

**Running the Algorithm**

To run the packing algorithm with the provided dataset (input.json), execute the main.py script:
```bash
python main.py
```

The script will proceed to execute the packing algorithm, saving the visualizations as below.

3D Visualization of the True Solution
![True Solution](https://github.com/Nivedha-Ramesh/Container-Loading-Problem/blob/master/Figures/True%20Solution.png)


3D Projection of one of the Rank1 Solutions
![Rank 1 solution](https://github.com/Nivedha-Ramesh/Container-Loading-Problem/blob/master/Figures/Rank1%20Solution.png)


Variation of Average Fitness Values over Generations
![Fitness Variation](https://github.com/Nivedha-Ramesh/Container-Loading-Problem/blob/master/Figures/Fitness%20Variation.png)


Visualization of the Pareto Front
![Pareto Front](https://github.com/Nivedha-Ramesh/Container-Loading-Problem/blob/master/Figures/Pareto.png)


**Contributing**

Contributions are what make the open source community such an amazing place to learn, inspire, and create. 
Any contributions you make are **greatly appreciated**.

**License**

Distributed under the MIT License. 

**Contact**

Nivedha Ramesh - [nivedharamesh9351@gmail.com](mailto:youremail@nivedharamesh9351@gmail.com)