import networkx as nx
import pandas as pd
def getPath(src:str,dest:str):
    G = nx.Graph()
    df = pd.read_csv("links.csv")
    nodes = df["Start"].to_list()
    edges = []
    for i in range(len(df)):
        d1 = df.iloc[i]
        edges.append((d1["Start"],d1["End"],d1["Dist"]))
    G.add_nodes_from(nodes)
    G.add_weighted_edges_from(edges)
    return nx.shortest_path(G, source=src, target=dest, weight=None, method='dijkstra')
def getPathFull(src:str,nodes:list[str],dest:str):
    ins = src
    res = []
    for i in nodes:
        res.extend(getPath(ins,i))
        ins = i
        res = res[:len(res)-1]
    res.extend(getPath(ins,dest))
    return res