import Service from '@ember/service';

export default Service.extend({
  count: 0,
  nextOffset: 0,
  nextLimit: 0,
  currentOffset: 0,
  currentLimit: 0,
  previousOffset: 0,
  previousLimit: 0,

  update(newData, current) {
    console.log('updating pagination');
    console.log(newData);;

    this.set('count', newData.count);

    if (newData.next) {
      const next = new URLSearchParams(newData.next.split('?')[1]);
      this.set("nextOffset", parseInt(next.get('offset')));
      this.set("nextLimit", parseInt(next.get('limit')));
    }

    if (newData.previous) {
      const previous = new URLSearchParams(newData.previous.split('?')[1]);
      this.set("previousOffset", parseInt(previous.get('offset')));
      this.set("previousLimit", parseInt(previous.get('limit')));
    }

    if (current) {
      this.set('currentOffset', current.offset);
      this.set('currentLimit', current.limit);
    }
  },

  // display() {
  //   console.log('count:', this.count, ' next: {', this.nextOffset, ':', this.nextLimit, '} previous: {', this.previousOffset, ':', this.previousLimit, '}');
  // }
});
