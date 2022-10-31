export default function MobileDetection(){
    return !!navigator.userAgent.match(/iphone|android|blackberry/ig) || false;
}