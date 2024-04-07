import os
import numpy as np
import plotly.io as pio
import matplotlib.pyplot as plt
import plotly.graph_objects as go
import matplotlib.tri as mtri

class Visualization:
    def __init__(self, p_ind=0):
        self.palette = ['darkgreen', 'tomato', 'yellow', 'darkblue', 'darkviolet', 'indianred', 'yellowgreen', 'mediumblue', 'cyan', 'black', 'indigo', 'pink', 'lime', 'sienna', 'plum', 'deepskyblue', 'forestgreen', 'fuchsia', 'brown', 'turquoise', 'aliceblue', 'blueviolet', 'rosybrown', 'powderblue', 'lightblue', 'skyblue', 'lightskyblue', 'steelblue', 'dodgerblue', 'lightslategray', 'lightslategrey', 'slategray', 'slategrey', 'lightsteelblue', 'cornflowerblue', 'royalblue', 'ghostwhite', 'lavender', 'midnightblue', 'navy', 'darkblue', 'blue', 'slateblue', 'darkslateblue', 'mediumslateblue', 'mediumpurple', 'rebeccapurple', 'darkorchid', 'darkviolet', 'mediumorchid']
        self.color_palette = ['lightcoral', 'firebrick', 'maroon', 'darkred', 'red', 'salmon', 'darksalmon', 'coral', 'orangered', 'lightsalmon', 'chocolate', 'saddlebrown', 'sandybrown', 'olive', 'olivedrab', 'darkolivegreen', 'greenyellow', 'chartreuse', 'lawngreen', 'darkseagreen', 'palegreen', 'lightgreen', 'limegreen', 'green', 'seagreen', 'mediumseagreen', 'springgreen', 'mediumspringgreen', 'mediumaquamarine', 'aquamarine', 'lightseagreen', 'mediumturquoise', 'lightcyan', 'paleturquoise', 'darkslategray', 'darkslategrey', 'teal', 'darkcyan', 'aqua', 'cyan', 'darkturquoise', 'cadetblue', 'thistle', 'violet', 'purple', 'darkmagenta', 'magenta', 'orchid', 'mediumvioletred', 'deeppink', 'hotpink', 'lavenderblush', 'palevioletred', 'crimson', 'lightpink']

        self.save_dir = os.path.join("PS"+str(p_ind))
        if not os.path.exists(self.save_dir):
            os.makedirs(self.save_dir)
    
    def plot_average_fitness(self, avg_fitness):
        """
        Plots the average fitness values against the number of generations.
        """
        generations = range(1, len(avg_fitness) + 1)
        avg_fitness_values = list(zip(*avg_fitness))

        plt.figure(figsize=(10, 6))
        plt.plot(generations, avg_fitness_values[0], label='Average Occupied Volume (%)')
        plt.plot(generations, avg_fitness_values[1], label='Average Number of Boxes (%)')
        plt.plot(generations, avg_fitness_values[2], label='Average Value of Boxes (%)')

        plt.xlabel('Generation')
        plt.ylabel('Average Fitness')
        plt.title('Average Fitness Over Generations')
        plt.legend()
        plt.savefig(f"{self.save_dir}/fitness_variation.png")
        plt.close()

    def cuboid_data(self, o, size=(1, 1, 1)):
        l, w, h = size
        x = [[o[0], o[0] + l, o[0] + l, o[0], o[0]],
             [o[0], o[0] + l, o[0] + l, o[0], o[0]],
             [o[0], o[0] + l, o[0] + l, o[0], o[0]],
             [o[0], o[0] + l, o[0] + l, o[0], o[0]]]
        y = [[o[1], o[1], o[1] + w, o[1] + w, o[1]],
             [o[1], o[1], o[1] + w, o[1] + w, o[1]],
             [o[1], o[1], o[1], o[1], o[1]],
             [o[1] + w, o[1] + w, o[1] + w, o[1] + w, o[1] + w]]
        z = [[o[2], o[2], o[2], o[2], o[2]],
             [o[2] + h, o[2] + h, o[2] + h, o[2] + h, o[2] + h],
             [o[2], o[2], o[2] + h, o[2] + h, o[2]],
             [o[2], o[2], o[2] + h, o[2] + h, o[2]]]
        return np.array(x), np.array(y), np.array(z)
    
    def plot_cuboid(self, pos, size, ax, color):
        X, Y, Z = self.cuboid_data(pos, size)
        ax.plot_surface(X, Y, Z, color=color, rstride=1, cstride=1)

    def draw_final_rank1_solutions(self, population):
        color_list = self.palette + self.color_palette  
        for key, value in population.items():
            if value['Rank'] == 1:
                fig = plt.figure() 
                ax = fig.add_subplot(111, projection='3d')
                for i, box in enumerate(value['result']):
                    color = color_list[i % len(color_list)]  
                    pos = box[:3] 
                    size = box[3:]  
                    self.plot_cuboid(pos, size, ax, color=color)  
                plt.title(f"Visualization of Rank 1 Solution")
                plt.savefig(f"{self.save_dir}/R1_{key}.png")
                plt.close('all')

    def draw_plotly_final_rank1_solutions(self, population):
        fig = go.Figure()
        color_list = self.palette + self.color_palette 
        for key, value in population.items():
            if value['Rank'] == 1:
                for i, box in enumerate(value['result']):
                    pos = box[:3]
                    size = box[3:]
                    color = color_list[i % len(color_list)]  
                    fig.add_trace(go.Mesh3d(
                        x=[pos[0], pos[0]+size[0], pos[0]+size[0], pos[0], pos[0], pos[0]+size[0], pos[0]+size[0], pos[0]],
                        y=[pos[1], pos[1], pos[1]+size[1], pos[1]+size[1], pos[1], pos[1], pos[1]+size[1], pos[1]+size[1]],
                        z=[pos[2], pos[2], pos[2], pos[2], pos[2]+size[2], pos[2]+size[2], pos[2]+size[2], pos[2]+size[2]],
                        color=color,
                        opacity=1,
                        alphahull=0
                    ))
                file_name = f"{self.save_dir}/R1_{key}.html"
                pio.write_html(fig, file=file_name)
    
    def draw_plotly_true_solution(self, solution):
        fig = go.Figure()
        color_list = self.palette + self.color_palette  
        for i, box in enumerate(solution):
            pos = box[:3]
            size = box[3:]
            color = color_list[i % len(color_list)] 
            fig.add_trace(go.Mesh3d(
                x=[pos[0], pos[0]+size[0], pos[0]+size[0], pos[0], pos[0], pos[0]+size[0], pos[0]+size[0], pos[0]],
                y=[pos[1], pos[1], pos[1]+size[1], pos[1]+size[1], pos[1], pos[1], pos[1]+size[1], pos[1]+size[1]],
                z=[pos[2], pos[2], pos[2], pos[2], pos[2]+size[2], pos[2]+size[2], pos[2]+size[2], pos[2]+size[2]],
                color=color,
                opacity=1,
                alphahull=0
            ))
        
        file_name = f"{self.save_dir}/TrueSolution.html"
        pio.write_html(fig, file=file_name)
        
    def draw_pareto(self, population):
        fig = plt.figure()
        ax = fig.add_subplot(111, projection='3d')
        fitness, number, weight = [], [], []
        fitness2, number2, weight2 = [], [], []

        for key, value in population.items():
            if value['Rank'] == 1:
                fitness.append(value['fitness'][0])
                number.append(value['fitness'][1])
                weight.append(value['fitness'][2])
            else:
                fitness2.append(value['fitness'][0])
                number2.append(value['fitness'][1])
                weight2.append(value['fitness'][2])

        if len(fitness) > 2:
            try:
                ax.scatter(fitness2, number2, weight2, c='b', marker='o')
                ax.scatter(fitness, number, weight, c='r', marker='o')
                triang = mtri.Triangulation(fitness, number)
                ax.plot_trisurf(triang, weight, color='red')
                ax.set_xlabel('occupied space')
                ax.set_ylabel('no of boxes')
                ax.set_zlabel('value')
                plt.savefig(f"{self.save_dir}/pareto.png")
                plt.close(fig)
            except Exception as e:
                print("An error occurred:", str(e))

             