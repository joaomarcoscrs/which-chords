const publishableKey = '%PUBLISHABLE_KEY%'

const MODEL = {
  // model: 'guitar-chords-daewp',
  // version: '1',
  model: 'rock-paper-scissors-sxsw',
  version: '11',
}

async function roboflowModel(modelConfig = MODEL) {
  var model = await roboflow
    .auth({ publishable_key: publishableKey })
    .load(modelConfig);

  return model.configure({
    threshold: 0.4,
  });
}

var initialized_models = [
  roboflowModel(),
]

function detect(imageElement) {
  return roboflowModel().then(function (model) {
    return model.detect(imageElement).then(function (predictions) {
      return predictions
    });
  });
}
