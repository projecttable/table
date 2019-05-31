<template>
    <div class="left">
        <div class="header">
            VUEADMIN
        </div>
        <div class="list">
            <el-aside width="260px">
                <el-menu :default-openeds="['1']">
                    <el-submenu index="1">
                        <template slot="title"><i class="el-icon-message"></i>导航一</template>
                        <el-menu-item-group>
                            <el-menu-item index="1-1">Table</el-menu-item>
                            <el-menu-item index="1-2">From</el-menu-item>
                            <el-menu-item index="1-2">列表</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                    <el-submenu index="2">
                        <template slot="title"><i class="el-icon-menu"></i>导航二</template>
                        <el-menu-item-group>
                            <el-menu-item index="2-1">选项1</el-menu-item>
                            <el-menu-item index="2-2">选项2</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                    <el-submenu index="3">
                        <template slot="title"><i class="el-icon-s-check"></i>导航三</template>
                        <el-menu-item-group>
                            <el-menu-item index="3-1">选项1</el-menu-item>
                            <el-menu-item index="3-2">选项2</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                    <el-submenu index="4">
                        <template slot="title"><i class="el-icon-s-data"></i>Charts</template>
                        <el-menu-item-group>
                            <el-menu-item index="3-1">选项1</el-menu-item>
                            <el-menu-item index="3-2">选项2</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                </el-menu>
            </el-aside>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang='stylus' scoped>
    .left{
        width: 260px;
        height: 452px;
        background: #ccc;
        .header{
            width: 100%;
            height: 62px;
            text-align: center;
            line-height: 62px;
            color: #fff;
            background: rgb(20,160,255);
            font-size: 20px;
        }
        .list{
            display: flex;
            flex-direction: column;
            width: 100%;
            text-align: center;
             .el-header {
                color: #333;
                line-height: 60px;
            }    
            .el-aside {
                color: #333;
            }
        }
    }
</style>
