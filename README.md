# hw9game
Email:utsav_patel@student.uml.edu
           Name: Utsav Patel
           I am a junior/senoir at Umass Lowell in  91.61 GUI Programming I
           91.461 Assignment:  Creating Your First Web Page
           Utsav Patel, UMass Lowell Computer Science, upatel@cs.uml.edu
           Copyright (c) 2019 by Utsav Patel.  All rights reserved.  May be
           freely copied or excerpted for educational purposes with credit to
           the author.
           updated by UP on december 20th, 2019 at 9:23 AM
           This website was checked using validator.nu which provided no errors

Summary:
	In this assignment we had to implement a scrabble board and use drag and drop feature to drop the letters on the board.
	The things I got it to work was to implement the scrabble board which was done in html and adjusted the size accordingly by adding the title image which were given in the assignment sheet/rubric.The the button to restart the game was added, submit button to check the word in dictionary and next word button to move to the next level in the game. The rack was implemented to have all the tiles there with the photo of the rack being added in the css. In this I used a valid word in the dictionary so the user can check if they entered in the right word/ the user can move to a different level even if the word is not in the dictionary, it is for users understanding purposes only, although that was extra credit. I used jquery ui drag and drop functionality to implement the drag and drop tiles on the rack image to the blocks of the game. When this is done at the top of the screen it will let the user know which letter they have entered whether be it horizontal and vertical. The letter in the left corner will be counted twice and for both because it will be the last letter of the vertical word and first letter for the horizontal word. The scores will be updated underneath that as well and will count double letter and/or word if the user enters that and output the score. The reset/start game will clear all the stored data of the scores and/or the word and start the game over. In this it will randomly pick 13 letters to show it on the rack, to do this I used math.random which is a function that will return randomly. And after, that print how many tiles are left in the game at the top, the way that is done is that since 13 tiles are produced each round it will subtract 13 from the total amount which is begins with when next word is clicked. 
Things achieved simple version:Randomly selected letters, letters can be drag and drop in the square, it lets the user know which letter has been implement at the top, the board has bonus squares/double letter or word, the score count is correct (the letter in the left corner/edge will count twice because of being last word in vertical column and first in horizontal), the player can play until runs out of tiles and can restart the game, the board is being cleared when next word takes to next level and have another set to tiles, when a word is played whatever title the user has in "hand" are being appeared, and is keep track of multiple word. 
Extra credit: There are multiple scrabble board lines there is one vertical and horizontal, and it is able to valid user entered words. 
