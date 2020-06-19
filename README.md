# PhotoGallery
An Ionic demo application to create a simple photo galleryu app that works on Iphone and Android with the same code. See https://ionicframework.com/getting-started


Useful commands:

-- Setup
npm install -g @ionic/cli
sudo gem install cocoapods


-- angular or react
-- blank , tabs , sidebar
ionic start myApp tabs



-- Create service
ionic g service services/photo

-- Run local
ionic serve



-- For phone
ionic build

ionic cap add ios
ionic cap add android

-- Update changes to phone
ionic cap copy
ionic cap sync
