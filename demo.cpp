#include <iostream>
#include <string.h>
using namespace std;
long long KT(int n){
    long long gt=1;
    for(int i=1; i<=n; i++) gt=gt*i;
    return gt;
}
// int KT(int x){
//     int T(0);
//     for(int i=1; i<=x;i++) T= T+i;
//     return T;
// }
int main()
{
    int a, b;
    cout<<"Nhap a, b:";
    cin>>a>>b;
    cout<<KT(a)+KT(b)<<endl;
    return 0;
    // string s="BaiKiemTra";
    // s.erase(0,3);
    // cout<<s;
    // string s = "KiemTraCuoiKi";
    // cout<<s.erase(7,6);
    // cout<<KT(10);
    // return 0;
    // string s = "KiemTra2022";
    // for(int i=7; i<=10; i++) cout<<s[i];
    // cout<<s.erase(0,5);
    // int x =1, y=1;
    // if (x==0||++y)
    // {
    //     /* code */
    //     cout<<x<<y;
    // }
    
}