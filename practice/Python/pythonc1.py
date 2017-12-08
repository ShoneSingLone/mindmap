# #号注释法
print("Hello Python!")

''' print("Hello Python2!")
print("Hello Python3!") '''

listStuck = [1,"2","3"]
print(listStuck[0])
listStuck[0] = "111111"
print(listStuck[0])
tuplesStuck = (1, "2", "3")
print(tuplesStuck[0])
dictionaryStuck = {"Name": "ShoneSingLone"}
print(dictionaryStuck["Name"])
setStuck = set('asdfasdfasdfasdfasdfasdf')
setStuck2 = set('asdfjkl;')
setStuck3 = set('asd')
print(setStuck)
print(setStuck | setStuck2)
b=8
if(b==9):
 print(b)
# print(setStuck + setStuck3)

for i in range(0,10):
    if(i>5):
     print("in for loop: current is "+str(i))
     continue
