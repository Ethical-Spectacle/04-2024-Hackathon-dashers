import json
from tabulate import tabulate
from PackingAlgorithm import PackingAlgorithm  
from Visualization import Visualization

NUM_OF_INDIVIDUALS = 40
NUM_OF_GENERATIONS = 600
PC = 0.8
PM1 = 0.5
PM2 = 0.2
K = 4
ROTATIONS = 6


if __name__ == "__main__":

    with open('input.json', 'r') as outfile:
        data = json.load(outfile)
    problem_indices = list(data.keys())

    for p_ind in problem_indices:
        visualization = Visualization(p_ind)
        print("Running Problem Set {}".format(p_ind))
        print(tabulate([['Generations', NUM_OF_GENERATIONS], ['Individuals', NUM_OF_INDIVIDUALS],
                        ['Rotations', ROTATIONS], ['Crossover Prob.', PC], ['Mutation Prob1', PM1],
                        ['Mutation Prob2', PM2], ['Tournament Size', K]], headers=['Parameter', 'Value'],
                       tablefmt="github"))
        print()
        truck_dimension = data[p_ind]['truck dimension']
        boxes = data[p_ind]['boxes']
        total_value = data[p_ind]['total value']
        boxParams = {}
        for i, params in enumerate(boxes):
            boxParams[i] = params
        pa = PackingAlgorithm(box_params=boxParams, truck_dimension=truck_dimension, total_value=total_value, population_size=NUM_OF_INDIVIDUALS, generations=NUM_OF_GENERATIONS,
                              k=K, pc=PC, pm1=PM1, pm2=PM2, rotation=ROTATIONS)
        pa.optimize()

        visualization.plot_average_fitness(pa.avg_fitness)
        true_solution = data[p_ind]['solution']

        visualization.draw_final_rank1_solutions(pa.population)
        visualization.draw_plotly_final_rank1_solutions(pa.population)
        visualization.draw_plotly_true_solution(true_solution)
        visualization.draw_pareto(pa.population)