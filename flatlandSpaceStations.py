"""
Flatland is a country with a number of cities, some of which have space stations.
Cities are numbered consecutively and each has a road of 1 km length connecting it to
the next city. It is not a circular route, so the first city doesn't connect with the
last city. Determine the maximum distance from any city to its nearest space station.
Example
n = 3
c = [1]
There are n = 3 cities and city 1 has a space station. They occur consecutively along a
route. City 0 is 1 - 0 = 1 unit away and city 2 is 2 - 1  = 1 units away. City 1 is 0
units from its nearest space station as one is located there. The maximum distance is 1.
"""

def flatlandSpaceStations(n, c):
    c.sort()
    d = 0
    for i in range(1, len(c)):
        if d < (c[i] - c[i - 1]) // 2:
            d = (c[i] - c[i - 1]) // 2
    return max(d, c[0], n - c[-1] - 1)

if __name__ == '__main__':
    """
    fptr = open(os.environ['OUTPUT_PATH'], 'w')
    nm = input().split()
    n = int(nm[0])
    m = int(nm[1])
    c = list(map(int, input().rstrip().split()))
    result = flatlandSpaceStations(n, c)
    fptr.write(str(result) + '\n')
    fptr.close()
    """
    print("2 --> ", flatlandSpaceStations(5, [0, 4]))
    print("0 --> ", flatlandSpaceStations(6, [0,1,2,4,3,5]))