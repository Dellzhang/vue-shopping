<template>
  <div>
    <div class="top-cont">
      <div class="top">
        <div class="container">
          <div class="lable">
            <span>分类</span>
            <a href="#">全部</a>
          </div>
          <div class="down">
            <span>美食<i class="el-icon-caret-bottom"></i></span>
          </div>
        </div>
        <div class="container">
          <div class="lable">
            <span>区域</span>
            <a href="#">全部</a>
          </div>
          <div class="down bom-down">
            <span>中原区<i class="el-icon-caret-bottom"></i></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
  .top-cont{
    border: 1px solid #e5e5e5;
    border-radius: 4px;
    background: #FFF;
    .top{
      .container{
        display: flex;
        padding: 15px 20px 0px 20px;
        box-sizing: border-box;
        .lable{
          width: 160px;
          span{
            display: inline-block;
            width: 80px;
          }
          a{
            height: 22px;
            line-height: 22px;
            border-radius: 100px;
            background: #13D1BE;
            color: #FFF;
            padding: 4px 12px;
          }
        }
        .down{
          flex: 1;
          color: #666;
          padding-bottom: 10px;
          border-bottom: 1px solid #e5e5e5;
          &.bom-down{
            border: none;
          }
        }
      }
    }
  }
</style>