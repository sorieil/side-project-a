<template>
  <div class="write">
    <form>
      <div class="form-box">
        <input class="title" type="text" v-model="form.title" maxlength="100" required placeholder="제목을 입력해주세요."/>
      </div>
      <div class="form-box">
        <input class="mate-name" type="text" v-model="form.mateName" maxlength="20" required
               placeholder="메이트의 이름을 입력해주세요."/>
        <input class="when-mate-date" type="date" v-model="form.whenMateDate" required/>
      </div>
      <file-upload v-on:model="fileChange"></file-upload>
      <div class="form-box">
        <dropdown-box-select :data="selectBoxData" v-on:model="(v) => form.lotion = v" title="로션 선택" staticTitle="로션"
                             :required="true"></dropdown-box-select>
        <dropdown-box-select :data="selectBoxData" v-on:model="(v) => form.lotion = v" title="수분 선택" staticTitle="수분"
                             :required="true"></dropdown-box-select>
        <dropdown-box-select :data="selectBoxData" v-on:model="(v) => form.lotion = v" title="홍조 선택" staticTitle="홍조"
                             :required="true"></dropdown-box-select>
        <dropdown-box-select :data="selectBoxData" v-on:model="(v) => form.lotion = v" title="각질 선택" staticTitle="각질"
                             :required="true"></dropdown-box-select>
      </div>
      <div class="separate-line"></div>
      <textarea class="content"></textarea>
      <div class="submit">
        <!--<button class="edit">수정하기</button>-->
        <button class="write-button" @click.stop="go('/review')">작성완료</button>
      </div>
    </form>
  </div>
</template>

<script>
  import {firebase, defaultStorage, defaultStore} from '@/library/firebase'
  import DropdownBoxSelect from '@/components/common/DropdownBoxSelect'
  import FileUpload from '@/components/common/FileUpload'
  export default {
    components: {FileUpload, DropdownBoxSelect},
    name: 'write',
    data() {
      return {
        form: {
          uid: this.$store.getters.uid,
          title: '',
          mateName: '',
          whenMateDate: '',
          tag: '',
          photoUrl: [],
          lotion: '',
          viscosity: '',
          moisture: '',
          insertDate: firebase.firestore.FieldValue.serverTimestamp(),
          content: '',
          photos: []
        },
        selectBoxData: {
          '상': {
            title: '상'
          },
          '중': {
            title: '중'
          },
          '하': {
            title: '하'
          }
        },
        uploadProgressCounter: 0
      }
    },
    methods: {
      go(path) {
        this.$router.push({path: path})
      },
      fileChange(e) {
        console.log(e)
        this.form.photoUrl = e[0].name
        this.form.photos = e
      },
      saveProcess() {
        if (this.photos.length > 0) {
          const promiseAll = []
          const result = []
          for (let i = 0; i < this.photos.length; i++) {
            console.log('i:', i)
            promiseAll.push(this.firebaseStorage(this.photos[i].blob, i))
            if ((promiseAll.length - 1) === i) {
              Promise.all(promiseAll).then((rst) => {
                if (rst) {
                  result.push('true')
                  if (result.length === promiseAll.length) {
                    this.save()
                  }
                } else {
                  alert('이미지 업로드중 실패한 이미지가 있습니다. <br>관리자에게 문의주세요.')
                }
              })
            }
          }
        } else {
          this.save()
        }
      },
      save() {
        defaultStore.collection('reviews').put(this.form).then(() => {
          alert('작성완료')
          this.$router.push({path: '/review'})
        })
      },
      firebaseStorage(image, index) {
        return new Promise((resolve, reject) => {
          const fileName = this.photos[index].name
          const uploadTask = defaultStorage.ref('review/' + fileName).put(image)
          let progress = 0
          uploadTask.on('state_changed', (snapshot) => {
            progress = ((snapshot.bytesTransferred / snapshot.totalBytes) * 100) - progress
            this.uploadProgressCounter += progress
            progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            switch (snapshot.state) {
              case 'paused': // or 'paused'
//                console.log('Upload is paused')
                break
              case 'running': // or 'running'
//                console.log('Upload is running')
                break
            }
          }, (error) => {
            alert(error)
            resolve(false)
          }, () => {
            const downloadURL = uploadTask.snapshot.downloadURL
            this.form.photoUrl = downloadURL
            this.form.photos.name = fileName
            resolve(true)
          })
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .write {
    width: 1024px;
    position: relative;
    margin: auto;

    .form-box {
      display: flex;
      justify-items: flex-start;
      /*border: 1px solid red;*/
      height: 50px;
      width: 100%;
      font-size: 12px;
      input {
        font-size: 12px;
        border: 0;
        margin: 0 0 49px 0;
        height: 30px;
        background-color: rgb(243, 243, 243);
        opacity: 0.6;
        font-weight: 400;
        padding: 0 0 0 20px;
      }

      input.title {
        width: 80%;
      }

      input.mate-name {
        width: 200px;
        height: 30px;
        display: inline-block;
      }
      input.when-mate-date {
        width: 200px;
        height: 30px;
        display: inline-block;
        margin: 0 0 0 30px;
      }
    }

    .separate-line {
      border-bottom: 1px solid #beb0b0;
      display: block;
      margin: 15px auto;
    }

    textarea.content {
      border: 0;
      width: 99%;
      height: 338px;
      background-color: rgb(243, 243, 243);
      font-weight: 300;
      text-align: left;
      color: rgb(88, 88, 88);
      padding: 5px;
      resize: none;
    }

    .dropdown-box-select {
      width: 100%;
      min-width: 105px;
      height: 40px;
      background-color: rgb(243, 243, 243);
      margin: 0 24px 0 0;
      text-align: left;
      color: rgb(88, 88, 88);
    }

    .submit {
      margin: 50px 0 0 0;
      text-align: center;
      button {
        width: 186px;
        height: 36px;
        line-height: 1.32;
        font-size: 14px;
        letter-spacing: 0.5px;
        text-align: center;
        color: rgb(103, 101, 101);
        margin: 0 0 0 40px;
        outline: none;
        border: 0;
      }

      .edit-button {
        background-color: rgb(245, 224, 215);
      }

      .write-button {
        background-color: rgb(242, 199, 181);
      }
    }

  }

</style>
