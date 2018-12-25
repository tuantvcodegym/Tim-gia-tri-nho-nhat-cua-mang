function kiemTraSoNhoNhat(x) {
    var min = x[0];
    for (i = 0; i < x.length; i++) {
        if (x[i] < min) {
            min = x[i];
        }
    }
    if(x.length == 0){
        document.write(-1);
    }else{
        document.write("Gia tri nho nhat trong mang la: " + min);
    }
}