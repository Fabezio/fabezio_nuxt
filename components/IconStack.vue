<template>
    <span class="fa-stack fa-1x fa-fw">
        <i class="far fa-circle fa-stack-2x fa-fw teal-circle"></i>
        <i :class="faClass" class="fa-stack-1x this-fa fa-fw fa-inverse"></i>
    </span>
</template>

<script>
export default {
    name: "IconStack",
    props: ['faClass']
}
</script>