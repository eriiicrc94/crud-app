.<template>
    <div class="container align-right">
        <button type="{{type}}" class="btn btn-primary">{{title}}</button>
    </div>
</template>

<script>
export default {
    props: ['title', 'type']
}
</script>

<style scoped>
button {
  margin-bottom: 1rem;
  min-width: 6rem;
  max-width: 6rem;
}

.align-right {
  text-align: right;
}
</style>
