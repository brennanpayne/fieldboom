#### Fieldboom

Thoughts / Improvements:
- I initially assumed that the answers to the questions for the individual survey responses were in the same order as the questions on the form.
  This is not the case and I would need to map them to display them correctly.  It seems to mostly work.

- For the "Range" questions, the rule dictates that the answer can have a minimum value of 1, but there are some responses with `0`.  I wasn't sure what to do about those.

- Filtering the `Select` questions is a bit fragile.  We have a rule value of `Yes` or `No`, but the answers themselves are `yes`/`no`.  I tried to lowercase everything for proper comparison, but I'm assuming there are missed cases here.

- Adding different types of text filters should be a pretty straightforward endeavor if we enumerate the different options available and then add an additional menu before the user input is accepted.

- Similarly, adding multiple filters could be accomplished by storing a filter for each question, instead of a single filter at in `FormResponses`.  We could then iterate over all the applied filters.

- I regret not binding the "Enter" key to submit the filter.

- I would've liked to beef up the Table component better, allowing for more abstraction and then layering in more situational aspects via something like `SurveyReponsesTable`, or something akin.

- I was quickly approaching the point in which I would've liked to restructure the directories a bit.  Perhaps a Basic Components section (`Button`, `IconButton`, `SideBar`, etc), Situational Components (`FormLabels`, `FormFilterTypes`, etc), and something similar for Containers.  Or something different entirely, there are a few schools of thought on how larger React apps should be laid out.
