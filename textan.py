#!/usr/bin/env python

# textan.py
# Combine two sentences into one

import sys,random

#########################
# File line randomising script
# 
 

def _scr1(a):
    #"turns item a into (random#,a) pairs"
    return (random.randint(0,1000000),a)

def _scr2(a):
    #"gets x from (random#,x) pairs"
    return a[1]

def _scramble_list(l):
    #"return a scrambled version of the list l. used by lwdb_btree files when
		#packing, to insert the new rows in random order."
    n = map(_scr1, l) # create [ ( random1, keyvalue1), .... ] pairs
    n.sort() # sort by random numbers (scrambles list)
    return map( _scr2, n) # return back just the actual key values

#
#########################

wordlistpt=[" e "," de "," da "," do "," das "," dos "," o "," as "," os "," com "," em "," na "," no "," que "," sem ", " para "]
wordlisten=[" after "," with "," from "," in ", " for "," by "," to be ", " hold "," to "," may "," is "]
fontlist=["mini","smscript","banner"]


def importandscramble(filename): # grabs a line from specified file containing word
	# open source text file
	file = open(filename)
	# create a list out of the file contents
	inputlist = file.readlines()
	return _scramble_list(inputlist)

def getmatchingline(filename,word):
	inputlist = importandscramble(filename)
	results = findword(inputlist,word) # should work
	# If there's a result, cool
	if results:
		return results.strip()
	# else, use another word
	else:
		word = getrandomelement(wordlisten)	
		getmatchingline(filename,word)
	
def findword(alist,word): # find string in a list, returns list of elements
	for element in alist:
		if (element.find(word) != -1):
			return element
		
def getrandomelement(alist):
	return alist[random.randint(0,len(alist)-1)]

def textanjoinparts(line1,line2,word):
	
	x = random.randint(0,1)
	if x == 0:
		firsthalf = line1.split()
		secondhalf = line2.split()
	else:
		firsthalf = line2.split()
		secondhalf = line1.split()
	
	searchword = word.strip()
	index1 = int(firsthalf.index( searchword ))
	index2 = int(secondhalf.index( searchword ))
	
	_line1 = firsthalf[0:index1]
	_line2 = secondhalf[index2+1:len(secondhalf)]	
	_word = searchword.split()

	result = ' '.join(_line1 + _word + _line2)
	
	print result
	
	
def gogotextan():
	word = getrandomelement(wordlisten)
	font = getrandomelement(fontlist)
	line1 = getmatchingline( inputfile1,word )
	line2 = getmatchingline( inputfile2,word )
	if line1 and line2:
		if len(line1) > 0 and len(line2) > 0 and line1 != line2 and word in line1 and word in line2:
			result = textanjoinparts(line1,line2,word)
			return result
		else:
			gogotextan()
	
	# else, use another word
	else:
		gogotextan()	
	
font = ""
line1 = ""
line2 = ""
inputfile1=sys.argv[1] + ".txt"
inputfile2=sys.argv[2] + ".txt"
gogotextan()



# toss a coin to decide input file order: 1-2 or 2-1
#if random.randint(0,1) == 0:
	#part1 = grabrandomline(inputfile1)
	#part2 = 
