# Don't forget to run the tests (and create some of your own)

def anagrams_for(word, list_of_words):
	anagrams_found = []
	for this_word in list_of_words:
		test_this_word = list(this_word)
		for letter in word:
			if letter in test_this_word:
					test_this_word.remove(letter)
		if len(test_this_word) == 0:
				anagrams_found.append(this_word)
	return anagrams_found


#list_of_words = ["threads", "trashed", "hardest", "hatreds", "hounds"]
#print(anagrams_for("threads", list_of_words))