<template>
  <div class="file-upload">
    <label for="imageUploads">이미지 선택(PNG, JPG)</label>
    <input type="file" id="imageUploads" name="imageUploads" accept=".jpg, .jpeg, .png" @change="selectFile">
    <div class="preview">
      <img :src="previewImages[0].src" v-if="previewImages[0]"/>
    </div>
  </div>
</template>

<script>
  import * as Hash from 'object-hash'
  // import {defaultStorage} from '@/library/firebase'

  export default {
    name: 'FileUpload',
    props: {
      fileUploadNumber: {
        default: 1,
        type: Number
      }
    },
    data() {
      return {
        fileButton: '',
        previewImages: [],
        uploadProgressMax: 0
      }
    },
    methods: {
      selectFile(event) {
        const uploadFiles = event.target.files
        this.previewImages = []
        Object.keys(uploadFiles).map((i) => {
          if (parseInt(i, 10) < this.fileUploadNumber) {
            const reader = new FileReader()
            if (uploadFiles[i].type.match('image.*')) {
              reader.onload = (() => {
                return (e) => {
                  const extendFileName = uploadFiles[i].name.split('.')[1]
                  const fileName = Hash(new Date().getTime()) + '.' + extendFileName
                  if (this.previewImages.length < 6) {
                    this.previewImages.push({
                      blob: e.target.result,
                      name: fileName,
                      sort: 0
                    })
                    this.returnValue()
                  } else {
                    console.log('Until')
                  }
                }
              })(uploadFiles[i])
              reader.readAsDataURL(uploadFiles[i])
            }
          } else {
            this.showModal('최대 6장까지 업로드 가능 더 하고 싶으면 연락 하셈!ㅋ')
          }
        })
      },
      returnValue() {
        this.$emit('model', this.previewImages)
      }
//       deleteFile(index) {
//         // 업로드 된 파일만
//         if (typeof this.form.images[index] !== 'undefined') {
//           const imageName = this.form.images[index].name
//           const desertRef = defaultStorage.ref(imageName)
// //         firebase storage 삭제
//           const updateField = {
//             profilePhotoFileName: '',
//             profilePhotoUrl: '',
//             images: this.previewImages
//           }
//           console.log(desertRef)
//
//           // 삭제 하고자 하는 이미지가 메인이미지로 선택 되어진거라면
//           if (!this.previewImages[index].main) {
//             window.unset(updateField, ['profilePhotoFileName', 'profilePhotoUrl'])
//           }
//           updateField.images[index] = null
//           // 삭제 로직
//         }
//
//         this.removeSelectedImage(index)
//       },
//       firebaseStorage(image, index) {
//         return new Promise((resolve, reject) => {
//           const fileName = this.selectedImages[index].name
//           const uploadTask = defaultStorage.ref(fileName).put(image)
//           let progress = 0
//           uploadTask.on('state_changed', (snapshot) => {
//             progress = ((snapshot.bytesTransferred / snapshot.totalBytes) * 100) - progress
//             this.uploadProgressCounter += progress
//             progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
//             switch (snapshot.state) {
//               case 'paused': // or 'paused'
// //                console.log('Upload is paused')
//                 break
//               case 'running': // or 'running'
// //                console.log('Upload is running')
//                 break
//             }
//           }, (error) => {
//             alert(error)
//             resolve(false)
//           }, () => {
//             const downloadURL = uploadTask.snapshot.downloadURL
//             if (this.previewImages[index].main) {
//               this.form.profilePhotoUrl = downloadURL
//               this.form.profilePhotoFileName = fileName
//             }
//
//             console.log('this.form.images', this.form)
//
//             this.form.images[index] = {
//               name: fileName,
//               url: downloadURL,
//               sort: 0,
//               main: this.previewImages[index].main
//             }
//             resolve(true)
//           })
//         })
//       },
//       fileUpload() {
//         let activeMain = 0
//         console.log('previewImages: ', this.previewImages)
//         console.log('form: ', this.form)
//         console.log('selected: ', this.selectedImages)
//         new Promise(resolve => {
//           this.previewImages.forEach((value, key) => {
//             console.log(value.main)
//             if (value.main) {
//               activeMain++
//             }
//
//             if (this.previewImages.length === key + 1) {
//               console.log(activeMain)
//               resolve(true)
//             }
//           })
//         }).then(() => {
//           if (activeMain === 1) {
//             if (this.selectedImages.length > 0) {
//               const promiseAll = []
//               const result = []
//               for (let i = 0; i < this.selectedImages.length; i++) {
//                 console.log('i:', i)
//                 promiseAll.push(this.firebaseStorage(this.selectedImages[i], i))
//                 if ((promiseAll.length - 1) === i) {
//                   Promise.all(promiseAll).then((rst) => {
//                     if (rst) {
//                       result.push('true')
//                       if (result.length === promiseAll.length) {
//                         this.save()
//                       }
//                     } else {
//                       this.showModal('이미지 업로드중 실패한 이미지가 있습니다. <br>관리자에게 문의주세요.')
//                     }
//                   })
//                 }
//               }
//             } else {
//               this.save()
//             }
//           } else {
//             this.showModal('메인 이미지를 선택해주세요.')
//           }
//         })
//       }
    }
  }
</script>

<style lang="scss" scoped>
  .file-upload {
    height: 200px;
    width: 450px;
    /*border: 1px solid red;*/
    color: #fff;
    display: block;
    position: relative;
    font-size: 12px;

    label {
      /*border: 1px solid red;*/
      border-radius: 5px;
      text-align: center;
      line-height: 30px;
      background-color: #004eff;
      display: inline-block;
      width: 200px;
      height: 30px;
    }
    input {
      visibility: hidden;
      position: absolute;
      width: 1px;
    }

    .preview {
      float: right;
      position: relative;
      width: 200px;
      height: 200px;
      /*border: 1px solid red;*/
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: inherit;
        height: auto;
      }
    }

  }

</style>
