# 1. What is Promise ?
Ans: A promise is javascript's way of saying "I'll give you the result later -> either it'll succeed or it'll fail. 

# real-life analogy  :
You order food on zomato. The order is promise 
     1. Pending - Food being prepared (not ready yet)
     2. fulfilled (Resolved) - food is delivered 
     3. Rejected - Order cancelled 
# 2. What is promise ?
     A promise is an OBJECT. it wraps a value that will be available later. 
# Then()
Then() runs only when the promise resolve successfully. 

# catch()
catch runs ONLY when the promise is rejected. then() is completely skipped

#  Finally()
.finally() ALWAYS runs - whether the test passed or failed. just like AfterEach()

# Promise chaining -- The Solution to callback Hell
Compare this to the callback hell version -> completely FLAT, easy to read, ONE , .catch();
# What is difference between callback Hell and Promise Chain ?
