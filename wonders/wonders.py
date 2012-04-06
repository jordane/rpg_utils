#!/usr/bin/python
from random import random

WONDERS="./wonders.txt"

def main():
    choice = None

    wonders = open(WONDERS, 'r')

    for i, elem in enumerate(wonders, 1):
        r = random()
        if r < 1.0 / i:
            choice = elem

    return choice


if __name__ == '__main__':
    print main()
