// 現在のメッセージでイベントを送出する子を登録します
Vue.component('child', {
  template: '#child-template',
  data: function () {
    return { msg: 'hello' }
  },
  methods: {
    notify: function () {
      if (this.msg.trim()) {
        this.$dispatch('child-msg', this.msg)
        this.msg = ''
      }
    }
  }
})

// イベントを受信するとき、配列にメッセージをプッシュする
// ブートストラップな親です
var parent = new Vue({
  el: '#events-example',
  data: {
    messages: []
  },
  // `events` オプションは、インスタンスが作成されるとき、
  // このオプションで指定されたコールバックをイベントリスナとして `$on` を呼んで登録します
  events: {
    'child-msg': function (msg) {
      // イベントのコールバックでの `this` は
      // それが登録されたとき、自動的にインスタンスに結びつけます
      this.messages.push(msg)
    }
  }
})
