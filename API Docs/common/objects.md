### Face object
 Field  | Type | Description
------------- | -------------| -------------
score  | Float | Reliability measure: <br> * 0: absolutely vague. <br> * 1: absolutely reliable.
area  | [Rect object](#rect-object) | Rectangle area of face in image.
landmarks  | [Landmarks object](#landmarks-object) |  Remarkable points of face.
attributes | [Face analyze object](#face-analyze-object) | Attributes of person can be infered from her/him face.

### Body object
 Field  | Type | Description
------------- | -------------| -------------
area  | [Rect object](#rect-object) | Rectangle area of body.
pose | [Pose object](#pose-object) | Remarkable points of body.

### Pose object
 Field  | Type | Description
------------- | -------------| -------------
l_eye  | [Point object](#point-object) | Point of left eye.
r_eye  | [Point object](#point-object) | Point of right eye.
l_ear  | [Point object](#point-object) | Point of left ear.
r_ear  | [Point object](#point-object) | Point of right ear.
nose  | [Point object](#point-object) | Point of nose.
neck  | [Point object](#point-object) | Point of neck.
l_sho  | [Point object](#point-object) | Point of light shoudler.
r_sho  | [Point object](#point-object) | Point of rightshoulder.
l_elb  | [Point object](#point-object) | Point of left elbow.
r_elb  | [Point object](#point-object) | Point of right elbow.
l_wri  | [Point object](#point-object) | Point of left wrist.
r_wri  | [Point object](#point-object) | Point of right wrist.
l_hip  | [Point object](#point-object) | Point of left hip.
r_hip  | [Point object](#point-object) | Point of right hip.
l_knee  | [Point object](#point-object) | Point of left knee.
r_knee  | [Point object](#point-object) | Point of right knee.
l_ank  | [Point object](#point-object) | Point of left ank.
r_ank  | [Point object](#point-object) | Point of right ank.

### Face search object
 Field  | Type | Description
------------- | -------------| -------------
url  | String | #empty.
distance  | Float | #empty.

### Face analyze object
 Field  | Type | Description
------------- | -------------| -------------
emotion  | [Emotion Object](#emotion-object) | Probabilites of emotions of a person.
dominant_emotion  | String | The emotion has the biggest probability.
race  | [Race Object](#race-object) |  Probabilites of races of a person.
dominant_race  | String | The race has the biggest probability.
age  | Integer | 
gender  | String | 
area  | [Rect model](#rect-object) | Rectangle area of face in image axis.

### Emotion object 
Probabilites of emotions of a person.
 Field  | Type | Description
------------- | -------------| -------------
angry | Float | Probability (in 100%) of angry emotion (range: [0,1]).
disgust| Float |Probability (in 100%) of disgust emotion (range: [0,1]).
fear| Float | Probability (in 100%) of fear emotion (range: [0,1]).
happy | Float | Probability (in 100%) of happy emotion (range: [0,1]).
sad | Float | Probability (in 100%) of sad emotion (range: [0,1]).
surprise | Float | Probability (in 100%) of surprise emotion (range: [0,1]).
neutral | Float | Probability (in 100%) of neutral emotion (range: [0,1]).

### Race object 
A object define an rectanle area.
 Field  | Type | Description
------------- | -------------| -------------
asian | Float | Probability (in 100%) of asian race (range: [0,1]).
indian | Float |Probability (in 100%) of indian race (range: [0,1]).
black | Float | Probability (in 100%) of black race (range: [0,1]).
white | Float | Probability (in 100%) of white race (range: [0,1]).
middle eastern | Float | Probability (in 100%) of middle eastern emotion (range: [0,1]).
latino hispanic | Float | Probability (in 100%) of latino hispanic race (range: [0,1]).

### Rect object
Determine an rectangle area in 2d-space:
 Field  | Type | Description
------------- | -------------| -------------
top | Integer | Y-coordinate of upper left corner.
left| Integer | X-coordinate of upper left corner.
width| Integer | The area width. 
height | Integer | The area height.

### Landmarks object
Determine remarkable points in one face:
 Field  | Type | Description
------------- | -------------| -------------
right_eye | [Point object](#point-object) | Right eye point.
left_eye| [Point object](#point-object)  | Left eye point.
nose| [Point object](#point-object)  | Nose point.
mouth_right | [Point object](#point-object)  | Mouth right point.
mouth_left | [Point object](#point-object)  | Mouth left point.

### Point object
Detemines a point in axis of image with 2 elements:
 Element  | Type | Description
------------- | -------------| -------------
[0] | Float | X-coordinate.
[1] | Float | Y-coordinate.

### Image requirement
* Format: #empty.
* Size: #empty.
* File size: #empty.
* Minimal size of face: #empty.