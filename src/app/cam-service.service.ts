import { Injectable } from '@angular/core';
import { Camera, CameraResultType } from '@capacitor/camera';

@Injectable({
  providedIn: 'root'
})
export class CamServiceService {

  constructor() { }

  async TakePicture() {
    try
    {
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: true,
        resultType: CameraResultType.Uri
      });
      return image;  
    }
    catch(error)
    {
      console.error("Erro ao capturar imagens", error);
      throw error;
    }
  }
}
