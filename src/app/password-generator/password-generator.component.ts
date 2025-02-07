// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-password-generator',
//   templateUrl: './password-generator.component.html',
//   styleUrls: ['./password-generator.component.css']
// })
// export class PasswordGeneratorComponent {
//   passwordLength = 12;
//   includeUppercase = true;
//   includeLowercase = true;
//   includeNumbers = true;
//   includeSymbols = true;
//   generatedPassword = '';

//   generatePassword() {
//     const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
//     const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
//     const numberChars = '0123456789';
//     const symbolChars = '!@#$%^&*()_+[]{}|;:,.<>?';

//     let allowedChars = '';
//     if (this.includeUppercase) allowedChars += uppercaseChars;
//     if (this.includeLowercase) allowedChars += lowercaseChars;
//     if (this.includeNumbers) allowedChars += numberChars;
//     if (this.includeSymbols) allowedChars += symbolChars;

//     if (!allowedChars) {
//       this.generatedPassword = 'Select at least one option!';
//       return;
//     }

//     this.generatedPassword = Array.from(
//       { length: this.passwordLength },
//       () => allowedChars[Math.floor(Math.random() * allowedChars.length)]
//     ).join('');
//   }

//   copyToClipboard() {
//     navigator.clipboard.writeText(this.generatedPassword);
//     alert('Password copied to clipboard!');
//   }

// }


import { Component } from '@angular/core';

@Component({
  selector: 'app-password-generator',
  templateUrl: './password-generator.component.html',
  styleUrls: ['./password-generator.component.css']
})
export class PasswordGeneratorComponent {
  passwordLength: number = 8;
  includeUppercase: boolean = false;
  includeNumbers: boolean = false;
  includeSymbols: boolean = false;
  generatedPassword: string = '';

  // Load sound files
  private generateSound = new Audio('/assets/Sounds/pen-click.mp3');
  // private copySound = new Audio('/assets/Sounds/pen-click.mp3');

  generatePassword() {
    this.generateSound.play(); // Play generate sound

    let charset = 'abcdefghijklmnopqrstuvwxyz';
    if (this.includeUppercase) charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (this.includeNumbers) charset += '0123456789';
    if (this.includeSymbols) charset += '!@#$%^&*()_+{}[]<>?';

    let password = '';
    for (let i = 0; i < this.passwordLength; i++) {
      password += charset.charAt(Math.floor(Math.random() * charset.length));
    }

    this.generatedPassword = password;
  }

  copyToClipboard() {
    navigator.clipboard.writeText(this.generatedPassword).then(() => {
      // alert('Password copied to clipboard!');
      // this.copySound.play(); // Play copy sound

      const toast = document.getElementById("toast")!;
      toast.classList.add("show");
      
      // Hide the toast after 2 seconds
      setTimeout(() => {
          toast.classList.remove("show");
      }, 2000);
    });
  }
}

