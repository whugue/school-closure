### Metis Project 3: School Closure Classification

Can we identify schools at risk for closure by performance and other characteristics?

Full discussion available on [my blog](http://www.huguedata.com/2016/05/21/predicting-school-closure/). You can also peek at the [slides](https://github.com/whugue/school-closure/blob/master/deck/School%20Closure%20Pres.pdf) from my Metis presentation as well.


### Program Flow






### Data
None of the source or cleaned datafiles are included in this repository. However, the raw National Center for Education Statistics school-level Common Core of Data Files can be downloaded [here](https://nces.ed.gov/ccd/pubschuniv.asp), and the raw EdFacts School performance data can be downloaded [here](http://www2.ed.gov/about/inits/ed/edfacts/data-files/index.html). These data can be cleaned by running the *school-closure-clean.ipynb* notebook (see below).


### IPython Notebooks and Program Flow:
1. *01-school-closure-clean.ipynb*: Import raw NCES CCD and EdFacts data, clean, and engineer features.
2. *02-school-closure-classify.ipynb*: Apply various supervised machine learning algorithms from sklearn to predict school closure given performance and demographic characteristics. Evaluate performance of various algorithms in terms of precision-recall tradeoff.
3. *03-chool-closure-viz.ipynb*: Produce descriptive statistics from cleaned NCES data and compile county-level datafile for d3 maps.

### Dependencies
NumPy, Pandas, Sci-Kit Learn, Matplotlib, Seaborn



