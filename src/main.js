/*
 * Copyright 2015 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var WebVRManager = require('./webvr-manager.js');

window.WebVRConfig = window.WebVRConfig || {};
window.WebVRManager = WebVRManager;


var RADIANS = Math.PI / 180;

Particle3D = function(material) {
    THREE.Particle.call(this, material);

    //this.material = material instanceof Array ? material : [ material ];
    // define properties
    this.velocity = new THREE.Vector3(0, -8, 0);
    this.velocity.rotateX(randomRange(-45, 45));
    this.velocity.rotateY(randomRange(0, 360));
    this.gravity = new THREE.Vector3(0, 0, 0);
    this.drag = 1;
    // methods... 
};

Particle3D.prototype = new THREE.Particle();
Particle3D.prototype.constructor = Particle3D;

Particle3D.prototype.updatePhysics = function() {
    this.velocity.multiplyScalar(this.drag);
    this.velocity.addSelf(this.gravity);
    this.position.addSelf(this.velocity);
}