# flickr27-classifier

## Dependencies
* [Python 3] (https://www.python.org/)
* [Tensorflow] (https://www.tensorflow.org/)
* [NodeJS] (https://nodejs.org/en/)

## Testing pretrained graph
Run `python flickr.py <IMAGE PATH>`  
For example `python flickr.py test/bmw.jpg`

## Preparations for retraining
### Download and extract dataset
* Download the [flick27](http://image.ntua.gr/iva/datasets/flickr_logos/flickr_logos_27_dataset.tar.gz) dataset
* Extract dataset in `images/dataset/` directory
* Extraxt `images/dataset/flickr_logos_27_dataset_images.tar.gz` in `images/dataset/flickr_logos_27_dataset_images` directory
### Preprocess and augment dataset images
* Run `npm install` in `images/preprocess` to install node modules 
* Run `node preprocess_images.js` to sort images for retraining
* Run `npm install` in `images/augment` to install node modules 
* Run `node augment.js` to augment the dataset images

## Retraining
Run `python retrain.py`  
`--bottleneck_dir=retrain/bottlenecks`  
`--how_many_training_steps=4000`  
`--model_dir=retrain/inception`  
`--output_graph=retrain/retrained_graph1.pb`  
`--output_labels=retrain/retrained_labels1.txt`  
`--image_dir=images/logos`  
