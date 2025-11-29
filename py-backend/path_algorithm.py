import networkx as nx
import csv

def getPath(src: str, dest: str):
    G = nx.Graph()
    
    # Read CSV using built-in csv module
    edges = []
    nodes = set()
    
    with open("links.csv", mode="r", encoding="utf-8") as file:
        reader = csv.DictReader(file)
        for row in reader:
            start = row["Start"]
            end = row["End"]
            dist = float(row["Dist"])
            
            nodes.add(start)
            nodes.add(end)
            edges.append((start, end, dist))
    
    G.add_nodes_from(list(nodes))
    G.add_weighted_edges_from(edges)

    return nx.shortest_path(G, source=src, target=dest, weight="weight", method="dijkstra")

def getPathFull(src: str, nodes: list[str], dest: str):
    ins = src
    res = []
    for i in nodes:
        res.extend(getPath(ins, i))
        ins = i
        res = res[:-1]  # remove duplicate
    res.extend(getPath(ins, dest))
    return res
