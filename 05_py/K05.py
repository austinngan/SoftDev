#Austin Ngan
#SoftDev
#K01 -- Random Name Python Practice
#2021-09-22

# SUMMARY OF TRIO DISCUSSION
# Rediscovered the use of dictionaries in Python and how to correctly declare different lists
# of strings in them.
# DISCOVERIES
# use of dictionary documentation
# QUESTIONS
# Would using a text file for each roster have been faster?
# COMMENTS
# Code returns random name from random period


import random

KREWES = {
    'pd1' : ["Owen Yaggy", "Haotian Gan", "Ishraq Mahid","Ivan Lam","Michelle Lo"
        "Christopher Liu","Ivan Mijacika","Lucas Lee","Josephine Lee","Rayat Roy",
        "Emma Buller","William Chen","Rachel Xiao","Andrew Juang","Yuqing Wu"
        "Renggeng Zheng","Annabel Zhang","Alejandro Alonso","Deven Maheshwari",
        "Oscar Wang","Tami Takada","Yusuf Elsharawy","Ella Krechmer","Tomas Acuna",
        "Tina Nguyen","Theo Fahey","Sadid Ethun"],

    'pd2' : ["Patrick Ging","Wenhao Dong","Raymond Yeung","Kevin Cao","Michael Borczuk",
        "Alif Abdullah","Justin Zou","Andy Lin","Shadman Rakib","David Chong",
        "Daniel Sooknanan","Cameron Nelson","Austin Ngan","Yaying Liang Li"
        ,"Eric Guo","Noakai Aronesty","Roshani Shrestha","Yoonah Chang",
        "Qina Liu","Han Zhang","Joshua Kloepfer"]


def getName():
    period = randint(1,2)
    if period==1:
        randName=random.choice(KREWES.get('pd1'))
        print ("Period" + period + ": " + randName)
    if period==2:
        randName2=random.choice(KREWES.get('pd2'))
        print ("Period" + period + ": " + randName2)
