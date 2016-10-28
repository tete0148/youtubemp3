import os

liste = os.listdir()

for item in liste:
    if item[len(item)-4:] == '.mp3':
        os.rename(item, item[:len(item)-16]+'.mp3')