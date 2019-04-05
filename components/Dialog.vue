<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-outside" @click="$emit('close')" />
      <div class="modal-wrapper">
        <div class="modal">
          <div class="modal__content">
            <slot name="content">
              content
            </slot>
          </div>
          <button class="modal__close" @click="$emit('close')">
            <slot name="close">
              close
            </slot>
          </button>
        </div>
      </div>
    </div>
  </transition>
</template>

<style lang="scss" scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  transition: opacity .3s ease;
}

.modal-outside{
  position: fixed;
  height: 100%;
  width: 100%;
  z-index: -1;
}

.modal-wrapper {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
}

.modal {
  width: 300px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
}

.modal-leave-active {
  opacity: 0;
  .modal {
  transform: scale(1.1);
  }
}
</style>
