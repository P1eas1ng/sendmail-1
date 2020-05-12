var elem = document.createElement('div');
elem.style.cssText = 'width:100%;height:40px;background:transparent;display:flex;';
elem.innerHTML = '<form action="" method="GET" style="justify-content:center;display:flex;flex-direction:row; width:100%;height:40px;"><input name="email" style="border:1px solid blue;width:100%;" type="email" id="emailinput" placeholder="Enter your email" required><input style="height:40px;border:1px solid blue;background:blue;color:white;height:40px;" type="submit" value="Subscribe"></form>';
document.body.appendChild(elem);
