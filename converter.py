import os
from os import path

def writeJs(outputname):
  outputFile = open(outputname, 'w')
  outputFile.write('let test = 1')
  outputFile.write('\nlet newline = 2')

def readInput(filename):
  inputFile = open(filename, "r")
  for inputLine in inputFile:
    if inputLine[0] == '$':
      if inputLine[1] == 'n':
        newLine = inputLine[3:]
        print('filename: ', newLine)
    elif inputLine[0] == '#':
      if inputLine[1] == '#':
        newLine = inputLine[3:]
        print('Article Title: ', newLine)
      else:
        newLine = inputLine[2:]
        print('Paragraph Title: ', newLine)

def main():
  filename = 'test'
  inputname = filename + '.txt'
  outputname = filename + '.js'
  if path.exists(inputname):
    readInput(inputname)
    writeJs(outputname)
  else:
    print('Input file does not exist, please enter a valid filename')

if __name__== "__main__":
   main()