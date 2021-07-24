<template>
    <footer class="footer">
        <span>Copyright <strong> <a href="https://github.com/michael23-lopes" target="_blank" rel="noopener noreferrer">Michael W. Lopes</a></strong> ©</span>
    </footer>
</template>

<script>
export default {
    name: "Footer"
}
</script>

<style>
    .footer {
        grid-area: footer;
        background-color: #DDD;
        color: #333;

        display: flex;
        align-items: center;
        justify-content: flex-end;
        padding-right: 10px;
    }
</style>
