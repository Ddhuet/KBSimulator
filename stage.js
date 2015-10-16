function Stage(stage, top, bottom, left, right) {
    var stages = {
        "Battlefield": {
            killTop: 200,
            killBottom: -108.8,
            killLeft: -224,
            killRight: 224
        }
    }
    
    var killTop = stages[stage]["killTop"];
    var killBottom = stages[stage]["killBottom"];
    var killLeft = stages[stage]["killLeft"];
    var killRight = stages[stage]["killRight"];
    
    var pixelWidth = right - left;
    
    var pixelHeight = bottom - top;
    
    var killWidth = killRight - killLeft;
    
    var killHeight = killTop - killBottom;
    
    //Converts stage X values to pixels
    //Some dirty hackery to precompute parts of the conversion DansGame
    this.horToPixel = new Function("value",
        "var inputSpan = " + killWidth + "; " +
        "var outputSpan = " + pixelWidth + "; " +
        "var valueScaled = (value - " + killLeft + ") / inputSpan; " +
        "return " + left + " + (valueScaled * outputSpan);"
    );
    
    //Converts stage Y values to pixels
    //More dirty hackery to precompute parts of the conversion SwiftRage
    this.verToPixel = new Function("value",
        
        "var inputSpan = " + killHeight + "; " +
        "var outputSpan = " + pixelHeight + "; " +
        "var valueScaled = (value - " + killBottom + ") / inputSpan; " + 
        "return " + bottom + "- (valueScaled * outputSpan);"
    );
    
}
