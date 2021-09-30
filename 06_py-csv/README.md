# K06 -- StI/O: Devine your Destiny!
## Fabulous Frogs (David Chong, Wen Hao Dong, Austin Ngan) | Period 2

We first open the `occupations.csv` file using the `with open([filename]) as f:`
syntax which initializes a variable f with the appropriate file, and
automatically closes the file afterwards.

Next, we skip the first line of the file, which is the header containing
`Job Class,Percentage`, by calling `f.readline()`.

Then, we read the rest of the file line by line using a for-loop and calling
`line.rstrip()` to remove the trailing newline.

For each line, we call a function we made called `split_values` which converts
a given row into a tuple (a tuple stores multiple values, e.g. `("Hello", 2.4)`)
of the Job Class and Percentage and then store it in a dictionary as a key-value
pair.

---

### Dictionaries

Dictionaries are useful because they can store values based on a given key/label
and can later be accessed with the same key.

For example, the following dictionary:
```python
fruits = {
    "Apple": "Red",
    "Banana": "Yellow",
    "Orange": "Orange",
}
```
stores a number of fruits and associates them with their color, and later on
can be accessed with the syntax `fruits[fruit_name]` to get the appropriate
color.

---

### Lists



---

### Github-Flavored Markdown

Markdown is

For headers, you can use up to 6 hash (#) sign. The sizes of your header decreases with the amount of hash symbols you put.
```
# This is a large header
## This is smaller than large
### This is smaller than smaller than large
```



---

### Weighted Randomized Selection

