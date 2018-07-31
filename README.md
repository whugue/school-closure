### Metis Project 3: School Closure Classification

Can we identify schools at risk for closure by performance and other characteristics?

Full discussion available on [my blog](http://www.huguedata.com/2016/05/21/predicting-school-closure/). You can also peek at the [slides](https://github.com/whugue/school-closure/blob/master/deck/School%20Closure%20Pres.pdf) from my Metis presentation as well.


### Program Flow
The table below provides high-level overviews of what each IPython notebook  does. More information (including specific input/ouput data) can be found in each notebooks' header.


Program 	| Description | 
----------- | ----------- |
01-school-closure-clean.ipynb | Import raw NCES CCD and EdFacts data, clean, and engineer features.
02-school-closure-classify.ipynb | Predict school closures based onperformance and demographic characteristics.
03-chool-closure-viz.ipynb | Produce descriptive statistics from cleaned NCES data and compile county-level datafile for d3 maps.

