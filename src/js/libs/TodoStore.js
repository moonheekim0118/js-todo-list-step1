import Subject from './Subject.js';
import localStorage from '../utils/localStorage.js';
import { STATUS } from '../utils/constant.js';

// Todo 앱 전반 State 관리
class TodoStore extends Subject {
  constructor(initialData) {
    super();
    this.originData = initialData; // 데이터베이스로부터 가져온 전체 데이터
    this.renderData = initialData; // 보여줄 데이터
    this.status = STATUS.ALL; // 투두 필터링 status
  }

  /**
   * @param {object[]} todoData
   */
  setOriginData(todoData) {
    // 로컬 스토리지에 저장
    localStorage.setItem(todoData);
    this.originData = todoData;
  }
  /**
   * @param {object[]} renderData
   */
  setRenderData(renderData) {
    this.renderData = renderData;
    this.notifyAll();
  }

  /**
   * @param {string} status
   */
  setStatus(status) {
    this.status = status;
    switch (status) {
      case STATUS.ACTIVE:
        return this.setRenderData(
          this.originData.filter((data) => !data.complete),
        );
      case STATUS.COMPLETED:
        return this.setRenderData(
          this.originData.filter((data) => data.complete),
        );
      default:
        return this.setRenderData(this.originData);
    }
  }
}

export default TodoStore;
