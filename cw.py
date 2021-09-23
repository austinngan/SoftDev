#Austin Ngan
#SoftDev
#K01 -- Random Name Python Practice
#2021-09-22

import random

pd1 = ["Joe Smith", "Jim Smith", "Leon Lauren"]

pd2 = ["Alex Baron", "Bean Cris", "Chad Johnson"]

def getName(period):
    if period==0:
        randName=random.choice(pd1)
        print (randName)
    else:
        randName2=random.choice(pd2)
        print (randName2)
