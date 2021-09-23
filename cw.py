#Austin Ngan
#SoftDev
#K01 -- Random Name Python Practice
#2021-09-22

import random

pd1 = ["Owen Yaggy", "Haotian Gan", "Ishraq Mahid","Ivan Lam","Michelle Lo"
        "Christopher Liu","Ivan Mijacika","Lucas Lee","Josephine Lee","Rayat Roy",
        "Emma Buller","William Chen","Rachel Xiao","Andrew Juang","Yuqing Wu"
        "Renggeng Zheng","Annabel Zhang","Alejandro Alonso","Deven Maheshwari",
        "Oscar Wang","Tami Takada","Yusuf Elsharawy","Ella Krechmer","Tomas Acuna",
        "Tina Nguyen","Theo Fahey","Sadid Ethun"]

pd2 = ["Patrick Ging","Wenhao Dong","Raymond Yeung","Kevin Cao","Michael Borczuk",
        "Alif Abdullah","Justin Zou","Andy Lin","Shadman Rakib","David Chong",
        "Daniel Sooknanan","Cameron Nelson","Austin Ngan","Yaying Liang Li"
        ,"Eric Guo","Noakai Aronesty","Roshani Shrestha","Yoonah Chang",
        "Qina Liu","Han Zhang","Joshua Kloepfer"]

def getName(period):
    if period==0:
        randName=random.choice(pd1)
        print (randName)
    else:
        randName2=random.choice(pd2)
        print (randName2)
