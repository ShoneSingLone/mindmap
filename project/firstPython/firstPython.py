file = open("D:/GitHub/mindmap/project/firstPython/test.txt",
            mode='r', buffering=-1)
data = file.read();
boolean = True
print(data)

while(boolean):
    fileline = file.readline()
    if(len(fileline) > 0):
        print(fileline)
    else:
        boolean = False
file = open("D:/GitHub/mindmap/project/firstPython/test2.txt",
            mode='a', buffering=-1)
file.write(data)
file.close



'''
函数
'''
func_arg = 10
print("out" + str(func_arg))


def func():
    print("in func!")
    print("in" + str(func_arg))
def compare(a,b):
    if(a>b):
        print("a>b")
    elif (a==b):
        print("a=b")
    else:
        print("a<b")


compare(9,10)
func()


print("hello")
a = 8
b = 10
# list map dictionary set tumple

if (b > 9):
    print(a)
    if (a < 9):
        print(a)
    elif (b > a):
        print("b>a")
# while
while_a = 0
while (while_a < 10):
    print("while_a" + str(while_a))
    while_a += 1

# for
for_a = ["aa", "bb", "cc"]
for i in for_a:
    print(i)

print("############range左闭右开\n与JavaScript数组的操作类似" + str(i))

for i in range(0, 14):
    if (0 == i % 3):
        continue
    print(str(i))

for x in range(1, 10):
    for y in range(1, x + 1):
        print(str(x) + " * " + str(y) + " = " + str(x * y) + " ", end=" ")
    print()
print()

for x in range(9, 0, -1):
    for y in range(1, x + 1):
        print(str(x) + " * " + str(y) + " = " + str(x * y) + " ", end=" ")
    print()


